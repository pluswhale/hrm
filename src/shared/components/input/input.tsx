import { FC, ReactElement } from 'react';
import { InputProps } from './types';

import styles from './input.module.scss';
import { useFormContext } from 'react-hook-form';

export const Input: FC<InputProps> = ({
    value,
    onChange,
    width = '100%',
    name,
    height,
    isRequired,
    label,
    pattern,
    placeholder,
    className,
    customStyles,
    ...props
}): ReactElement => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    console.log('errors', errors);

    const renderedInput = () => {
        return onChange ? (
            <input
                value={value}
                onChange={({ target }) => onChange(target.value)}
                style={customStyles?.input || {}}
                className={styles.input}
                placeholder={placeholder}
            /> // binded input
        ) : (
            <input
                style={customStyles?.input || {}}
                className={`${styles.input} ${errors?.[name] ? styles.input__error : ''} `}
                placeholder={placeholder}
                {...register(name, {
                    required: isRequired || false,
                    pattern,
                })}
            />
        );
    };

    return (
        <div style={{ width, height }} className={styles.wrapper}>
            {label ? (
                <label style={customStyles?.label || {}} className={styles.label} htmlFor={name}>
                    <span className={styles.label_text}>
                        {label} {isRequired && <span className={styles.required_symbol}>*</span>}
                    </span>

                    {renderedInput()}
                </label>
            ) : (
                <>{renderedInput()}</>
            )}
            {errors?.[name] && (
                <p className={styles.input__error}>{(errors?.[name]?.message as string) || 'Обязательное поле'}</p>
            )}
        </div>
    );
};

