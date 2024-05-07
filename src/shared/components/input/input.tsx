import { FC, ReactElement } from 'react';
import { InputProps } from './types';

import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
    width = '100%',
    name,
    isRequired,
    label,
    register,
    placeholder,
    className,
    customStyles,
    ...props
}): ReactElement => {
    return (
        <div style={{ width }} className={styles.wrapper}>
            {label ? (
                <label style={customStyles?.label || {}} className={styles.label} htmlFor={name}>
                    <span className={styles.label_text}>
                        {label} {isRequired && <span className={styles.required_symbol}>*</span>}
                    </span>

                    <input
                        style={customStyles?.input || {}}
                        className={styles.input}
                        placeholder={placeholder}
                        {...register(name, { required: isRequired || false })}
                    />
                </label>
            ) : (
                <input
                    style={customStyles?.input || {}}
                    className={styles.input}
                    placeholder={placeholder}
                    {...register(name, { required: isRequired || false })}
                />
            )}
        </div>
    );
};

