import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './appeals-list.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { APPEALS_LIST_DATA } from './constants';
import { Filter } from 'features/filter';
import { useNavigate } from 'react-router';
import { AppealsDataContainer } from 'features/appeals-list-data-container';
import { Appeal } from 'features/appeals-list-data-container/types';

const AppealsList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');
    const tabs = [{ label: 'Набор на практику' }, { label: 'Архив' }];

    const onSearchData = (value: string) => {
        setSearchValue(value); // Update search value state
    };

    const onNavigateToCreateVacancy = () => {
        navigate('/create/appeal');
    };

    const filteredData = () => {
        return APPEALS_LIST_DATA?.appeals?.filter((appeal: Appeal) =>
            appeal?.title?.toLowerCase().includes(searchValue.toLowerCase()),
        );
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
                        <AppealsDataContainer appeals={filteredData()} />
                    </div>
                    <Filter
                        value={searchValue}
                        onChangeValue={onSearchData}
                        title="Найти направление практики"
                        onClickSearch={() => console.log('заглушка')}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default AppealsList;

