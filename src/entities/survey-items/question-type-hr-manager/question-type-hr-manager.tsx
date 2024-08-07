import { FC, ReactElement } from 'react';
import { ShortText } from './question-types/short-text';
import { LongText } from './question-types/long-text';
import { OneOption } from './question-types/one-option';
import { MultipleOption } from './question-types/multiple-option';

import styles from './question-type-hr-manager.module.scss';
import { Question } from 'shared/types/question.type';

type Props = {
    question: Question;
};

export const QuestionTypeHrManager: FC<Props> = ({ question }): ReactElement => {
    const renderRelativeTypeAnswer = (questionType: string) => {
        switch (questionType) {
            case 'short_text':
                return <ShortText question={question} />;
            case 'long_text':
                return <LongText question={question} />;
            case 'one_variant':
                return <OneOption question={question} />;
            case 'multiple_variants':
                return <MultipleOption question={question} />;
        }
    };
    return <div className={styles.question}>{renderRelativeTypeAnswer(question?.type)}</div>;
};

