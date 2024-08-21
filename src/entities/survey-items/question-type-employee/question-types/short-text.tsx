import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { useParams } from 'react-router';

type Props = {
    question: any;
    onTypeTextQuestion: (questionId: number, value: string) => void;
};

export const ShortText: FC<Props> = ({ question, onTypeTextQuestion }): ReactElement => {
    const { sort } = useParams();

    console.log(sort);

    const disabled = sort === 'passed' && !sort ? true : false;

    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <input
                readOnly={disabled}
                value={question.textAnswer}
                onChange={({ target }) => onTypeTextQuestion(question?.id, target.value)}
            />
        </div>
    );
};

