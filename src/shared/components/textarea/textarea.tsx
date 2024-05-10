import { FC, ReactElement } from 'react';
import { InputProps } from './types';

import styles from './textarea.module.scss';
import { useFormContext } from 'react-hook-form';

export const Textarea: FC<InputProps> = ({
    width = '100%',
    name,
    isRequired,
    label,
    placeholder,
    className,
    customStyles,
    pattern,
    ...props
}): ReactElement => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

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
                        {...register(name, { required: isRequired || false, pattern })}
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
            {/* @ts-ignore */}
            {errors[name] && <p className={styles.textarea__error}>{errors[name].message}</p>}
        </div>
    );
};

