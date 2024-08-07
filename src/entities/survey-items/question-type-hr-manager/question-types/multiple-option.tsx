import { FC, ReactElement } from 'react';

import styles from './question-types.module.scss';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Question } from 'shared/types/question.type';

type Props = {
    question: Question;
};

export const MultipleOption: FC<Props> = ({ question }): ReactElement => {
    const disabled = true;
    return (
        <div className={styles.question}>
            <span className={styles.question__title}>{question?.title}</span>
            <FormGroup>
                {question?.options &&
                    question.options.map((option: any) => (
                        <FormControlLabel
                            control={<Checkbox disabled={disabled} checked={option.checked} />}
                            label={option?.optionName}
                        />
                    ))}
            </FormGroup>
        </div>
    );
};

