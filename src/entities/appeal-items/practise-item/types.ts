export type PracticyItemProps = {
    practicy: Practice;
}

export type Practice = {
    id: number,
    title: string,
    testTask: string,
    comment: string,
    status: string,
}
