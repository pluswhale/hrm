import { FC, ReactElement } from 'react';
import { RadioProps } from './types';

import styles from './radio.module.scss';

export const Radio: FC<RadioProps> = ({
                                          value,
                                          checked,
                                          onChange,
                                          label
                                      }): ReactElement => {
    const handleClick = () => {
        onChange && onChange(value);
    };

    return (
        <label className={styles.container}>
            <input
                type="radio"
                value={value}
                checked={checked}
                onChange={handleClick}
                className={styles.container__radioButton}
            />
            {label}
        </label>
    );
};
