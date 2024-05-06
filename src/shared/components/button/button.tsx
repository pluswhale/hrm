import { FC, ReactElement } from 'react';
import { ButtonProps, dynamicStylesObject } from './types';

export const Button: FC<ButtonProps> = (
    {
        text = '',
        type,
        image,
        onClick,
        styles,
        disabled
    }
): ReactElement => {
    return (
        <button
            style={styles || {}}
            disabled={disabled ? disabled : false}
            className={type && dynamicStylesObject[type]}
            onClick={onClick}
        >
            {image && <img src={image} alt="" />}
            {text}
        </button>
    );
}