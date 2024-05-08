import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './appeals-list.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { APPEALS_LIST_DATA } from './constants';
import { Filter } from 'features/filter';
import { useNavigate } from 'react-router';
import { AppealsDataContainer } from 'features/appeals-list-data-container';

const AppealsList = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [{ label: 'Набор на практику' }, { label: 'Архив' }];

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
                        text="Новое направление"
                        view="default_bg_white"
                    />
                </div>
                <div className={styles.vacancies__main_content}>
                    <div className={styles.vacancies__items}>
                        <AppealsDataContainer appeals={APPEALS_LIST_DATA?.appeals} />
                    </div>
                    <Filter title="Найти направление практики" onClickSearch={() => console.log('заглушка')} />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default AppealsList;

