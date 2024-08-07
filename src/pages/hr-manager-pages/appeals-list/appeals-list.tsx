import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './appeals-list.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { Filter } from 'features/filter';
import { useNavigate } from 'react-router';
import { AppealsDataContainer } from 'features/appeals-list-data-container';
import { fetchAllAppeals } from 'shared/api/appeals/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { Appeal } from 'shared/types/appeal.type';

const AppealsList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');

    const queryParameters = {
        queryKey: 'fetchAllAppeals',
        queryThunk: fetchAllAppeals,
        queryThunkOptions: {
            name: searchValue,
            isActive: activeTab === 0 ? true : false,
        },
    } as QueryParameters<Appeal[]>;
    const appealsQuery = useFetchData(queryParameters);

    const tabs = [{ label: 'Набор на практику' }, { label: 'Архив' }];

    const onSearchData = (value: string) => {
        setSearchValue(value);
    };

    const onNavigateToCreateVacancy = () => {
        navigate('/create/appeal');
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancies}>
                <div className={styles.vacancies__action_buttons}>
                    <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                    <Button
                        onClick={onNavigateToCreateVacancy}
                        styles={{ width: 'fit-content' }}
                        text="Новое направление"
                        view="default_bg_white"
                    />
                </div>
                <div className={styles.vacancies__main_content}>
                    <div className={styles.vacancies__items}>
                        {appealsQuery?.data && <AppealsDataContainer appeals={appealsQuery?.data} />}
                    </div>
                    <Filter
                        searchValue={searchValue}
                        onChangeSearchValue={onSearchData}
                        title="Поиск практик"
                        onToggleCheckboxInFilter={function (filterSetName: string, checkboxId: number): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default AppealsList;

