import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './survey-list.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { surveyListData } from './constants';
import { Filter } from 'features/filter';
import { SurveyListContainer } from '../../features/survey-list-data-container';

const SurveyList = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [{ label: 'Текущие опросы' }, { label: 'Завершенные опросы' }];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancies}>
                <div className={styles.vacancies__action_buttons}>
                    <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                    <Button styles={{ width: 'fit-content' }} text="Новый опрос" view="default_bg_white" />
                </div>
                <div className={styles.vacancies__main_content}>
                    <div className={styles.vacancies__items}>
                        <SurveyListContainer Survey={surveyListData?.Survey} />
                    </div>
                    <Filter title="Найти опрос" onClickSearch={() => console.log('заглушка')} />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default SurveyList;
