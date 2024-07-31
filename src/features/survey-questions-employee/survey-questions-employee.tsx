import React from 'react';
import style from './survey-questions-employee.module.scss';
import { Props } from './types';
import { QuestionTypeEmployee } from 'entities/survey-items/question-type-employee/question-type-employee';

const SurveyQuestionsEmployee: React.FC<Props> = ({ questions }) => {
    return (
        <div className={style.container__card}>
            {questions &&
                questions?.map((question: any) => <QuestionTypeEmployee key={question?.id} question={question} />)}
        </div>
    );
};

export default SurveyQuestionsEmployee;

