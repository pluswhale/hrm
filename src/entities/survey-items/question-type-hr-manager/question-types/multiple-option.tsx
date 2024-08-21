import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Question } from 'shared/types/question.type';
import { useMediaQuery } from 'react-responsive';

type Props = {
    question: Question;
};

export const MultipleOption: FC<Props> = ({ question }): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const disabled = true;
    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <FormGroup>
                {question?.options &&
                    question.options.map((option: any, index: number) => (
                        <FormControlLabel
                            key={index}
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: isMobile ? '14px' : '16px' } }}
                            control={
                                <Checkbox sx={{ fontSize: '16px' }} disabled={disabled} checked={option.checked} />
                            }
                            label={option?.optionName}
                        />
                    ))}
            </FormGroup>
        </div>
    );
};

