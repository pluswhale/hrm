import { FC, ReactElement } from 'react';
import { Question } from 'shared/types/question.type';

import styles from './question-types.module.scss';

type Props = {
    question: Question;
};

export const LongText: FC<Props> = ({ question }): ReactElement => {
    const disabled = true;
    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <textarea readOnly={disabled} value={question.textAnswer || ''} />
        </div>
    );
};

