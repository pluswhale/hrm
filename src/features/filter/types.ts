export type FilterProps = {
    title: string;
    filterSet?: FilterSet[];
    searchValue?: string;
    onToggleCheckboxInFilter: (filterSetName: string, checkboxId: number) => void;
    onChangeSearchValue?: (value: string) => void;
};

export type FilterSet = {
    id: number;
    title: string;
    checkboxes: {
        name?: string;
        title?: string;
        isActive: boolean;
        id: number;
        count: number;
    }[];
};

