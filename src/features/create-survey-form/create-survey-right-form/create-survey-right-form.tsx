import styles from './create-survey-right-form.module.scss';

import { useSelector } from 'react-redux';
import { questionsInCreateSurveySelector } from '../../../redux/selectors/create-survey';
import { AddQuestion } from 'entities/survey-items/add-question/add-question';
import { QuestionList } from 'entities/survey-items/questions-list/qustions-list';

const CreateSurveyRightForm = () => {
    const questions = useSelector(questionsInCreateSurveySelector);

    return (
        <div className={styles.container__wrap}>
            <div className={styles.container}>
                <h2>Вопросы</h2>
                <QuestionList questions={questions} />
                <AddQuestion />
            </div>
        </div>
    );
};

export default CreateSurveyRightForm;

