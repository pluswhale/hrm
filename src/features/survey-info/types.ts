export interface ColumnData {
    title: string;
    createdAt: string;
}

export interface Props {
    leftColumnData: ColumnData[];
    rightColumnData: ColumnData[];
}
