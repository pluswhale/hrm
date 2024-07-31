import styles from './edit-survey-right-form.module.scss';

import { useSelector } from 'react-redux';
import { questionsInCreateSurveySelector } from '../../../redux/selectors/create-survey';
import { QuestionList } from 'entities/survey-items/questions-list/qustions-list';
import { AddQuestion } from 'entities/survey-items/add-question/add-question';

export const EditSurveyRightForm = () => {
    const questions = useSelector(questionsInCreateSurveySelector);

    return (
        <div className={styles.right_form}>
            {questions?.length ? (
                <div className={styles.right_form__container}>
                    <h4 className={styles.right_form__title}>Вопросы</h4>
                    <QuestionList questions={questions} />
                </div>
            ) : null}
            <AddQuestion />
        </div>
    );
};

