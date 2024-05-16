import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './vacancies-list.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { VacanciesDataContainer } from 'features/vacancies-list-data-container/vacancies-list-data-container';
import { vacanciesListData } from './constants';
import { Filter } from 'features/filter';
import { useNavigate } from 'react-router';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllVacancies } from 'shared/api/vacancies/thunks';

const VacanciesList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');

    const queryParameters = {
        queryKey: 'fetchAllVacancies',
        queryThunk: fetchAllVacancies,
        queryThunkOptions: {
            isActive: activeTab === 0 ? true : false,
        },
    } as QueryParameters<any>;
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
                <div className={styles.vacancies__action_buttons}>
                    <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                    <Button
                        onClick={onNavigateToCreateVacancy}
                        styles={{ width: 'fit-content' }}
                        text="Новая вакансия"
                        view="default_bg"
                    />
                </div>
                <div className={styles.vacancies__main_content}>
                    <div className={styles.vacancies__items}>
                        <VacanciesDataContainer
                            vacancies={vacanciesQuery?.data?.data.filter((vacancy: any) =>
                                vacancy.title.toLowerCase().includes(searchValue.toLowerCase()),
                            )}
                        />
                    </div>
                    <Filter
                        value={searchValue}
                        onChangeValue={onSearchData}
                        title="Поиск вакансий"
                        onClickSearch={() => console.log('заглушка')}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default VacanciesList;

