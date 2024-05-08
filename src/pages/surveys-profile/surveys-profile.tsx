import React, { useState } from 'react';
import styles from './surveys-profile.module.scss';
import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from '../../shared/components/horizontal-navigation';
import { Button } from '../../shared/components/button/button';
import SurveyInfo from '../../features/survey-info/survey-info';
import { leftColumnData, rightColumnData, surveysResults } from './constants';
import { SwitchTab } from '../../shared/components/switch-tab';
import { SurveysQuestions } from '../../features/surveys-questions';
import SurveysResult from '../../features/surveys-result/surveys-result';
import { SurveysPoople } from '../../features/surveys-peolple';

const SurveysProfile = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [{ label: "Вопросы" }, { label: "Результаты опроса" }, { label: "Участники" }];

    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/survey',
        },
        {
            title: 'Название вакансии',
            url: '',
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.survey_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button text="Редактировать" type="default_bg_white" />
            </div>
            <div className={styles.survey_navigation__container}>
                <h2 className={styles.survey_navigation__container__title}>Название опроса</h2>
                <div className={styles.survey_navigation__wrap}>
                    {activeTab === 0 ? <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} /> : null}
                    {activeTab === 1 ? <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} /> : null}
                    {activeTab === 2 ? <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} /> : null}
                    <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData}/>
                </div>
            </div>
            <SwitchTab
                tabs={tabs}
                onTabClick={setActiveTab}
                activeTab={activeTab}
                design="default"
            />
            {activeTab === 0 && <SurveysQuestions />}
            {activeTab === 1 && <SurveysResult surveysResults={surveysResults} />}
            {activeTab === 2 && <SurveysPoople/>}
        </DefaultContentWrapper>
    );
};

export default SurveysProfile;
