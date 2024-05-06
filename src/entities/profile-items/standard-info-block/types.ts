export type StandardInfoBlockProps = {
    title: string,
    rows: Row[],
}

type Row = {
    label: string,
    value: string,
}