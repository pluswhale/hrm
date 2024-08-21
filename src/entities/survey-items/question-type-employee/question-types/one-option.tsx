import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

type Props = {
    question: any;
    onAnswerOptionQuestion: (questionId: number, optionId: number, type: 'multiple' | 'one') => void;
};

export const OneOption: FC<Props> = ({ question, onAnswerOptionQuestion }): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
                        question.options?.map((option: any, index: number) => (
                            <FormControlLabel
                                key={index}
                                sx={{ '& .MuiFormControlLabel-label': { fontSize: isMobile ? '14px' : '16px' } }}
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

