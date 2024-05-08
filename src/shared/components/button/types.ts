import styles from './button.module.scss';

type InlineStyle = { [key: string]: any };

type ButtonType =
    | 'default_bg'
    | 'default_bg_white'
    | 'default_bg_white_purple'
    | 'minor_bg'
    | 'default_bg_none_there'
    | 'default_bg_none_gray';

export type ButtonProps = {
    styles?: React.CSSProperties;
    view?: ButtonType;
    type?: string;
    onClick?: () => void;
    text?: string;
    href?: string;
    image?: string;
    disabled?: boolean;
};

export const dynamicStylesObject = {
    default_bg: styles.default_bg,
    default_bg_white: styles.default_bg_white,
    default_bg_white_purple: styles.default_bg_white_purple,
    minor_bg: styles.minor_bg,
    default_bg_none_there: styles.default_bg_none_there,
    default_bg_none_gray: styles.default_bg_none_gray,
} as InlineStyle;
