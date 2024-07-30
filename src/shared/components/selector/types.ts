export interface SelectorProps {
    onChange: (value: Option) => void;
    value: Option | null;
    options: OptionGroup[];
}

export interface OptionGroup {
    id: number;
    placeholder: string;
    options: Option[];
}

export interface Option {
    value: string;
    label: string;
}

