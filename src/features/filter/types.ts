export type FilterProps = {
    title: string,
    filterSet?: FilterSet[],
    onClickSearch?: () => void,

}

export type FilterSet = {
    id: number,
    title: string,
    checkboxes: {
        label: string,
        checked: boolean
    } []
}