import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { useParams } from 'react-router-dom';

type Props = {
    question: any;
    onTypeTextQuestion: (questionId: number, value: string) => void;
};

export const LongText: FC<Props> = ({ question, onTypeTextQuestion }): ReactElement => {
    const { sort } = useParams();

    const disabled = sort === 'passed' ? true : false;
    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <textarea
                readOnly={disabled}
                value={question.textAnswer}
                onChange={({ target }) => onTypeTextQuestion(question?.id, target.value)}
            />
        </div>
    );
};

