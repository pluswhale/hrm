import { useState } from 'react';
import styles from './surveys-profile.module.scss';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from '../../../shared/components/horizontal-navigation';
import { Button } from '../../../shared/components/button/button';
import SurveyInfo from '../../../features/survey-info/survey-info';
import { SwitchTab } from '../../../shared/components/switch-tab';
import { SurveysQuestions } from '../../../features/surveys-questions';
import SurveysResult from '../../../features/surveys-result/surveys-result';
import { SurveyDescription } from 'entities/survey-items/survey-description/survey-description';
import { useNavigate, useParams } from 'react-router';
import { fetchSurveyByIdForHR } from 'shared/api/surveys/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { SurveysPeople } from 'features/surveys-peolple';
import { Survey } from 'shared/types/survey.type';
import { useMediaQuery } from 'react-responsive';
import editIcon from '../../../assets/Редактировать.svg';

const SurveysProfile = () => {
    const { id: surveyId } = useParams();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const queryParameters = {
        queryKey: 'fetchSurveyByIdForHR',
        queryThunk: fetchSurveyByIdForHR,
        queryThunkOptions: {
            surveyId,
        },
    } as QueryParameters<Survey>;

    const surveyQuery = useFetchData(queryParameters);

    const tabs = [{ label: 'Вопросы' }, { label: 'Результаты опроса' }, { label: 'Участники' }];

    const navigation = [
        {
            title: 'Текущие опросы',
            url: '/survey',
        },
        {
            title: surveyQuery?.data?.name || '',
            url: undefined,
        },
    ];

    const onNavigateToEditSurveyPage = () => {
        navigate(`/survey/edit/${surveyId}`);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.survey_navigation}>
                <HorizontalNavigation navigation={navigation} />
                {!isMobile ? (
                    <Button onClick={onNavigateToEditSurveyPage} text="Редактировать" view="default_bg_white" />
                ) : null}
            </div>
            <div className={styles.survey_navigation__container}>
                {isMobile ? (
                    <div className={styles.survey_navigation__title_and_edit}>
                        <h2 className={styles.survey_navigation__container__title}>{surveyQuery?.data?.name}</h2>
                        <img onClick={onNavigateToEditSurveyPage} src={editIcon} alt="edit icon" />
                    </div>
                ) : (
                    <h2 className={styles.survey_navigation__container__title}>{surveyQuery?.data?.name}</h2>
                )}
                <div className={styles.survey_navigation__wrap}>
                    {surveyQuery?.data && <SurveyInfo surveyData={surveyQuery?.data} />}
                    <SurveyDescription title="Описание" content={surveyQuery?.data?.description || ''} />
                </div>
            </div>
            <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
            <div>
                {activeTab === 0 && <SurveysQuestions questions={surveyQuery?.data?.questions || []} />}
                {activeTab === 1 && <SurveysResult questions={surveyQuery?.data?.questions || []} />}
                {activeTab === 2 && <SurveysPeople participants={surveyQuery?.data?.targetedEmployees || []} />}
            </div>
        </DefaultContentWrapper>
    );
};

export default SurveysProfile;

