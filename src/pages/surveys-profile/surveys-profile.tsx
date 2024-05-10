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
import { SurveyResult } from '../../features/surveys-result/types';

const SurveysProfile = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [{ label: 'Вопросы' }, { label: 'Результаты опроса' }, { label: 'Участники' }];

    const navigation = [
        {
            title: 'Текущие опросы',
            url: '/survey',
        },
        {
            title: 'Название опроса',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.survey_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button text="Редактировать" view="default_bg_white" />
            </div>
            <div className={styles.survey_navigation__container}>
                <h2 className={styles.survey_navigation__container__title}>Название опроса</h2>
                <div className={styles.survey_navigation__wrap}>
                    {activeTab === 0 && (
                        <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} />
                    )}
                    {activeTab === 1 && (
                        <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} />
                    )}
                    {activeTab === 2 && (
                        <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} />
                    )}
                    <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} />
                </div>
            </div>
            <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
            <div>
                {activeTab === 0 && <SurveysQuestions />}
                {activeTab === 1 && <SurveysResult surveysResults={surveysResults as SurveyResult[]} />}
                {activeTab === 2 && <SurveysPoople />}
            </div>
        </DefaultContentWrapper>
    );
};

export default SurveysProfile;

