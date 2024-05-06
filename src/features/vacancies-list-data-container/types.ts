export type VacanciesDataContainerProps = {
    vacancies: Vacancy[],
}

type Vacancy = {
    id: number,
    title: string,
    navigationUrl: string,
    candidatesCount: number,
    created_at: string,
    deadline: string,
    status: string,
}