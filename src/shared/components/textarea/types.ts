import { CSSProperties } from 'react';

export type InputProps = {
    width: string;
    name: string;
    placeholder: string;
    className?: string;
    customStyles?: { label?: CSSProperties; textarea?: CSSProperties };
    isRequired?: boolean;
    label?: string;
    pattern?: Pattern;
};

type Pattern = {
    value: RegExp;
    message: string;
};

