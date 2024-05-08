export interface SelectorProps {
    onChange: (value: string) => void;
    value: string;
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
