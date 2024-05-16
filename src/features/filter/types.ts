export type FilterProps = {
    title: string;
    filterSet?: FilterSet[];
    onClickSearch?: () => void;
    value?: string;
    onChangeValue?: (value: string) => void;
};

export type FilterSet = {
    id: number;
    title: string;
    checkboxes: {
        label: string;
        checked: boolean;
    }[];
};

