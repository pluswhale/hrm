import { CSSProperties } from 'react';

export type InputProps = {
    value?: string;
    onChange?: (value: string) => void; // Если этот пропс передан, то это связанный инпут и работает без register из hook-form
    width?: string;
    name?: string;
    register?: any;
    placeholder?: string;
    className?: string;
    customStyles?: { label?: CSSProperties; input?: CSSProperties };
    isRequired?: boolean;
    label?: string;
};

