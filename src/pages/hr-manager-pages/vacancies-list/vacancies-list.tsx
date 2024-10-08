import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './vacancies-list.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { VacanciesDataContainer } from 'features/vacancies-list-data-container/vacancies-list-data-container';
import { Filter } from 'features/filter';
import { useNavigate } from 'react-router';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllVacancies } from 'shared/api/vacancies/thunks';
import { Vacancy } from 'shared/types/vacancy.type';
import { useMediaQuery } from 'react-responsive';
import { MobilePageHeader } from 'widgets/mobile-page-header/mobile-page-header';

const VacanciesList = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');

    const queryParameters = {
        queryKey: 'fetchAllVacancies',
        queryThunk: fetchAllVacancies,
        queryThunkOptions: {
            name: searchValue,
            isActive: activeTab === 0 ? true : false,
        },
    } as QueryParameters<Vacancy[]>;

    const vacanciesQuery = useFetchData(queryParameters);

    const tabs = [{ label: 'Активные вакансии' }, { label: 'Архив' }];

    const onSearchData = (value: string) => {
        setSearchValue(value); // Update search value state
    };

    const onNavigateToCreateVacancy = () => {
        navigate('/create/vacancy');
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancies}>
                {isMobile ? (
                    <MobilePageHeader
                        titlePage={'Вакансии'}
                        filter={
                            <Filter
                                searchValue={searchValue}
                                onChangeSearchValue={setSearchValue}
                                title="Поиск вакансий"
                            />
                        }
                        switchTabs={
                            <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                        }
                        searchValue={searchValue}
                        onChangeSearchValue={setSearchValue}
                    />
                ) : (
                    <div className={styles.vacancies__action_buttons}>
                        <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                        <Button
                            onClick={onNavigateToCreateVacancy}
                            styles={{ width: 'fit-content' }}
                            text="Новая вакансия"
                            view="default_bg_white"
                        />
                    </div>
                )}
                <div className={styles.vacancies__main_content}>
                    {isMobile ? (
                        <Button
                            onClick={onNavigateToCreateVacancy}
                            styles={{ width: 'fit-content' }}
                            text="Новая вакансия"
                            view="default_bg_white"
                        />
                    ) : null}
                    <div className={styles.vacancies__items}>
                        {vacanciesQuery?.data && <VacanciesDataContainer vacancies={vacanciesQuery?.data} />}
                    </div>
                    {!isMobile && (
                        <Filter
                            searchValue={searchValue}
                            onChangeSearchValue={onSearchData}
                            title="Поиск вакансий"
                            onToggleCheckboxInFilter={function (filterSetName: string, checkboxId: number): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    )}
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default VacanciesList;

