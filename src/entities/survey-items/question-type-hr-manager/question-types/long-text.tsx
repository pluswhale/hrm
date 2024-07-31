import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';

type Props = {
    question: any;
};

export const LongText: FC<Props> = ({ question }): ReactElement => {
    const disabled = true;
    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <textarea readOnly={disabled} value={question.textAnswer} />
        </div>
    );
};

