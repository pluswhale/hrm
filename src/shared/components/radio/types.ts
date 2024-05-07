import { CSSProperties } from 'react';

export type RadioProps = {
    value: any;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
};
