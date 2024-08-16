import { HorizontalNavigation } from '../../../shared/components/horizontal-navigation';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import styles from './edit-survey.module.scss';
import { EditSurveyForm } from 'features/edit-survey-form';
import { EditSurveyRightForm } from 'features/edit-survey-form/edit-survey-right-form';
import { fetchSurveyByIdForHR } from 'shared/api/surveys/thunks';
import { useParams } from 'react-router';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setQuestions } from '../../../redux/slices/create-survey';
import { Survey } from 'shared/types/survey.type';
import { Button } from 'shared/components/button/button';

const EditSurvey = () => {
    const dispatch = useAppDispatch();
    const { id: surveyId } = useParams();
    const formRef = useRef<any>(null);

    const queryParameters = {
        queryKey: 'fetchSurveyByIdForHR',
        queryThunk: fetchSurveyByIdForHR,
        queryThunkOptions: {
            surveyId,
        },
    } as QueryParameters<Survey>;

    const surveyQuery = useFetchData(queryParameters);

    useEffect(() => {
        if (surveyQuery?.data?.questions) dispatch(setQuestions({ questions: surveyQuery?.data?.questions }));
    }, [surveyQuery?.data?.questions]);

    const navigation = [
        {
            title: surveyQuery?.data?.name || '',
            url: `/survey/${surveyQuery?.data?.id}`,
        },
        {
            title: 'Редактирование опроса',
            url: undefined,
        },
    ];

    const handleExternalSubmit = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        }
    };

    return (
        <DefaultContentWrapper>
            <HorizontalNavigation navigation={navigation} />
            <div className={styles.container}>
                {surveyQuery?.data && <EditSurveyForm formRef={formRef} surveyData={surveyQuery?.data} />}
                <div className={styles.container__wrapper}>
                    <EditSurveyRightForm />
                </div>
            </div>
            <div className={styles.container__wrap_btn}>
                <Button
                    onClick={handleExternalSubmit}
                    styles={{ width: 'fit-content', height: '40px', marginTop: '' }}
                    text="Отредактировать опрос"
                    view="default_bg"
                />
            </div>
        </DefaultContentWrapper>
    );
};

export default EditSurvey;

