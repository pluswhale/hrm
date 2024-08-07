import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { Question } from 'shared/types/question.type';

type Props = {
    question: Question;
};

export const ShortText: FC<Props> = ({ question }): ReactElement => {
    const disabled = true;

    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <input readOnly={disabled} value={question.textAnswer || ''} />
        </div>
    );
};

