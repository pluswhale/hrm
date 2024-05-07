export type VacancyItemProps = {
    vacancy: Vacancy;
}

export type Vacancy =  {
    id: number,
    title: string,
    preferredIncome: string,
    employment: string,
    schedule: string,
    status: string,
}