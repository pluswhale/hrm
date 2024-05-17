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
        name: string;
        isActive: boolean;
        id: number;
    }[];
};

