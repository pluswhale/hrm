import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useParams } from 'react-router-dom';

type Props = {
    question: any;
    onAnswerOptionQuestion: (questionId: number, optionId: number, type: 'multiple' | 'one') => void;
};

export const MultipleOption: FC<Props> = ({ question, onAnswerOptionQuestion }): ReactElement => {
    const { sort } = useParams();

    const disabled = sort === 'passed' ? true : false;
    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <FormGroup>
                {question?.options &&
                    question.options.map((option: any) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    disabled={disabled}
                                    onChange={() => onAnswerOptionQuestion(question?.id, option?.id, 'multiple')}
                                    checked={option.checked}
                                />
                            }
                            label={option?.optionName}
                        />
                    ))}
            </FormGroup>
        </div>
    );
};

