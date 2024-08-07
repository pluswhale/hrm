import { FC } from 'react';
import style from './surveys-questions.module.scss';
import { QuestionTypeHrManager } from 'entities/survey-items/question-type-hr-manager/question-type-hr-manager';
import { Question } from 'shared/types/question.type';

type Props = {
    questions: Question[];
};

const SurveysQuestions: FC<Props> = ({ questions }) => {
    return (
        <div className={style.container}>
            {questions?.map((question, index: number) => <QuestionTypeHrManager key={index} question={question} />)}
        </div>
    );
};

export default SurveysQuestions;

