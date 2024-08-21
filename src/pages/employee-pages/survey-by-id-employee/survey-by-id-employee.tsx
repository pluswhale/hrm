import styles from './surveys-by-id-employee.module.scss';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from '../../../shared/components/horizontal-navigation';
import { SurveyDescription } from 'entities/survey-items/survey-description/survey-description';
import { useParams } from 'react-router';
import { fetchSurveyByIdForEmployee } from 'shared/api/surveys/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { SurveyInfoEmployee } from 'features/survey-info-employee';
import SurveyQuestionsEmployee from 'features/survey-questions-employee/survey-questions-employee';
import { useSelector } from 'react-redux';
import { questionsInAnswerSurveySelector } from '../../../redux/selectors/answer-survey';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setQuestions } from '../../../redux/slices/answer-survey';
import { Button } from 'shared/components/button/button';
import { useSubmitSurvey } from 'shared/api/surveys/mutations';
import { userDataSelector } from '../../../redux/selectors/auth';

const SurveyByIdEmployee = () => {
    const dispatch = useAppDispatch();
    const { id: surveyId } = useParams();
    const questionsInAnswerSurvey = useSelector(questionsInAnswerSurveySelector);
    const submitSurveyMutation = useSubmitSurvey();
    const userId = useSelector(userDataSelector)?.id;
    const { sort } = useParams();

    const queryParameters = {
        queryKey: 'fetchSurveyByIdForEmployee',
        queryThunk: fetchSurveyByIdForEmployee,
        queryThunkOptions: {
            surveyId,
        },
    } as QueryParameters<any>;

    const surveyQuery = useFetchData(queryParameters);

    useEffect(() => {
        if (surveyQuery?.data?.questions) {
            const modifiedQuestions = surveyQuery?.data?.questions?.map((question: any) => {
                if (question?.options?.length) {
                    const modifiedOptions = question?.options?.map((option: any) => ({ ...option, checked: false }));

                    return { ...question, options: modifiedOptions };
                } else {
                    return question;
                }
            });
            dispatch(setQuestions({ questions: modifiedQuestions }));
        }
    }, [surveyQuery?.data?.questions]);

    const navigation = [
        {
            title: sort === 'passed' ? 'Пройденные опросы' : 'Новые опросы',
            url: `/survey/employee/${sort}`,
        },
        {
            title: surveyQuery?.data?.name,
            url: undefined,
        },
    ];

    const onAnswerSurvey = () => {
        let answersBody: any = [];

        let fullBody = {
            employeeId: userId,
            answers: answersBody,
        };

        fullBody.answers = questionsInAnswerSurvey?.map((question) => {
            if (question?.options?.length) {
                const optionsIds = question?.options
                    ?.map((option: any) => (option.checked ? option.id : null))
                    .filter(Number);
                return { questionId: question?.id, selectedOptionIds: optionsIds };
            } else {
                return { questionId: question?.id, textAnswer: question?.textAnswer };
            }
        });

        submitSurveyMutation.mutate(fullBody);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.survey_navigation}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <div className={styles.survey_navigation__container}>
                <h2 className={styles.survey_navigation__container__title}>{surveyQuery?.data?.name}</h2>
                <div className={styles.survey_navigation__wrap}>
                    <SurveyInfoEmployee surveyData={surveyQuery?.data} />
                    <SurveyDescription title="Описание" content={surveyQuery?.data?.description} />
                </div>
                <h2 className={styles.survey_navigation__container__title}>Вопросы</h2>
                <SurveyQuestionsEmployee questions={questionsInAnswerSurvey} />
                <Button
                    view="default_bg"
                    type="button"
                    onClick={onAnswerSurvey}
                    text="Ответить"
                    styles={{ width: 'fit-content' }}
                />
            </div>

            <div></div>
        </DefaultContentWrapper>
    );
};

export default SurveyByIdEmployee;

