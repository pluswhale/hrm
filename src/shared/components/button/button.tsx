import { FC, ReactElement } from 'react';
import { ButtonProps, dynamicStylesObject } from './types';

export const Button: FC<ButtonProps> = ({
    text = '',
    type,
    image,
    onClick,
    styles,
    disabled,
                                            href,
}): ReactElement => {
    const Component = href ? 'a' : 'button';
    return (
        <Component
            href={href} // Add href attribute if it exists
            style={styles || {}}
            disabled={disabled}
            className={type && dynamicStylesObject[type]}
            onClick={onClick}
        >
            {image && <img src={image} alt="" />}
            {text}
        </Component>
    );
};

