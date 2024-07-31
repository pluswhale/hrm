import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useParams } from 'react-router-dom';

type Props = {
    question: any;
    onAnswerOptionQuestion: (questionId: number, optionId: number, type: 'multiple' | 'one') => void;
};

export const OneOption: FC<Props> = ({ question, onAnswerOptionQuestion }): ReactElement => {
    const { sort } = useParams();

    const disabled = sort === 'passed' ? true : false;
    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{question?.title}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={question?.options?.[0]?.optionName}
                    name="radio-buttons-group"
                >
                    {question?.options &&
                        question.options?.map((option: any) => (
                            <FormControlLabel
                                value={option?.optionName}
                                checked={option?.checked}
                                disabled={disabled}
                                control={
                                    <Radio onChange={() => onAnswerOptionQuestion(question?.id, option?.id, 'one')} />
                                }
                                label={option?.optionName}
                            />
                        ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

