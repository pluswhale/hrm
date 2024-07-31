import { FC, ReactElement } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { answerOptionQuestion, answerTextQuestion } from '../../../redux/slices/answer-survey';
import { ShortText } from './question-types/short-text';
import { LongText } from './question-types/long-text';
import { OneOption } from './question-types/one-option';
import { MultipleOption } from './question-types/multiple-option';

type Props = {
    question: any;
};

export const QuestionTypeEmployee: FC<Props> = ({ question }): ReactElement => {
    const dispatch = useAppDispatch();

    const onTypeTextQuestion = (questionId: number, value: string) => {
        dispatch(answerTextQuestion({ questionId, value }));
    };
    const onAnswerOptionQuestion = (questionId: number, optionId: number, type: 'multiple' | 'one') => {
        dispatch(answerOptionQuestion({ questionId, optionId, type }));
    };

    const renderRelativeTypeAnswer = (questionType: string) => {
        switch (questionType) {
            case 'short_text':
                return <ShortText question={question} onTypeTextQuestion={onTypeTextQuestion} />;
            case 'long_text':
                return <LongText question={question} onTypeTextQuestion={onTypeTextQuestion} />;
            case 'one_variant':
                return <OneOption question={question} onAnswerOptionQuestion={onAnswerOptionQuestion} />;
            case 'multiple_variants':
                return <MultipleOption question={question} onAnswerOptionQuestion={onAnswerOptionQuestion} />;
        }
    };
    return <>{renderRelativeTypeAnswer(question?.type)}</>;
};

