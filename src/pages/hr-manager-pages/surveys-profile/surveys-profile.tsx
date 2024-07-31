import { useState } from 'react';
import styles from './surveys-profile.module.scss';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from '../../../shared/components/horizontal-navigation';
import { Button } from '../../../shared/components/button/button';
import SurveyInfo from '../../../features/survey-info/survey-info';
import { leftColumnData, rightColumnData, SURVEY_DESCRIPTION_DATA, surveysResults } from './constants';
import { SwitchTab } from '../../../shared/components/switch-tab';
import { SurveysQuestions } from '../../../features/surveys-questions';
import SurveysResult from '../../../features/surveys-result/surveys-result';
import { SurveysPoople } from '../../../features/surveys-peolple';
import { SurveyResult } from '../../../features/surveys-result/types';
import { SurveyDescription } from 'entities/survey-items/survey-description/survey-description';
import { useNavigate } from 'react-router';

const SurveysProfile = () => {
    const navigate = useNavigate();
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

    const onNavigateToEditSurveyPage = () => {
        navigate('/survey/edit/1');
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.survey_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button onClick={onNavigateToEditSurveyPage} text="Редактировать" view="default_bg_white" />
            </div>
            <div className={styles.survey_navigation__container}>
                <h2 className={styles.survey_navigation__container__title}>Название опроса</h2>
                <div className={styles.survey_navigation__wrap}>
                    <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} />
                    {/* <SurveyDescription title="Описание" content={SURVEY_DESCRIPTION_DATA} /> */}
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

