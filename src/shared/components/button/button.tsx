import { FC, ReactElement } from 'react';
import { ButtonProps, dynamicStylesObject } from './types';

export const Button: FC<ButtonProps> = ({
    text = '',
    type,
    image,
    onClick,
    styles,
    disabled,
    view = '',
}): ReactElement => {
    return (
        <button
            type={type}
            style={styles || {}}
            disabled={disabled ? disabled : false}
            className={view && dynamicStylesObject[view]}
            onClick={onClick}
        >
            {image && <img src={image} alt="" />}
            {text}
        </button>
    );
};

