import { CSSProperties } from 'react';

export type InputProps = {
    width: string;
    name: string;
    register: any;
    placeholder: string;
    className?: string;
    customStyles?: { label?: CSSProperties; input?: CSSProperties };
    isRequired?: boolean;
    label?: string;
};

