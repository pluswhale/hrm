import { FC, ReactElement } from 'react';
import { InputProps } from './types';

import styles from './textarea.module.scss';

export const Textarea: FC<InputProps> = ({
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

                    <textarea
                        style={customStyles?.textarea || {}}
                        className={styles.textarea}
                        placeholder={placeholder}
                        {...register(name, { required: isRequired || false })}
                    />
                </label>
            ) : (
                <textarea
                    style={customStyles?.textarea || {}}
                    className={styles.textarea}
                    placeholder={placeholder}
                    {...register(name, { required: isRequired || false })}
                />
            )}
        </div>
    );
};

