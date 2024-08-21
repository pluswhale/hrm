import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Question } from 'shared/types/question.type';
import { useMediaQuery } from 'react-responsive';

type Props = {
    question: Question;
};

export const OneOption: FC<Props> = ({ question }): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const disabled = true;
    return (
        <div className={styles.question}>
            <FormControl>
                <FormLabel sx={{ fontSize: '16px' }} id="demo-radio-buttons-group-label">
                    {question?.title}
                </FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                    {question?.options &&
                        question.options?.map((option: any, index: number) => (
                            <FormControlLabel
                                key={index}
                                sx={{ '& .MuiFormControlLabel-label': { fontSize: isMobile ? '14px' : '16px' } }}
                                value={option?.optionName}
                                checked={option?.checked}
                                disabled={disabled}
                                control={<Radio />}
                                label={option?.optionName}
                            />
                        ))}
                </RadioGroup>
            </FormControl>
        </div>
    );
};

