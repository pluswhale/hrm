import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useParams } from 'react-router-dom';

type Props = {
    question: any;
};

export const OneOption: FC<Props> = ({ question }): ReactElement => {
    const disabled = true;
    return (
        <div className={styles.question}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{question?.title}</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                    {question?.options &&
                        question.options?.map((option: any) => (
                            <FormControlLabel
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

