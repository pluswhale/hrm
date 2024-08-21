import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

type Props = {
    question: any;
    onAnswerOptionQuestion: (questionId: number, optionId: number, type: 'multiple' | 'one') => void;
};

export const MultipleOption: FC<Props> = ({ question, onAnswerOptionQuestion }): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { sort } = useParams();

    const disabled = sort === 'passed' ? true : false;
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

