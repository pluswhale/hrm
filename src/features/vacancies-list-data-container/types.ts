export type VacanciesDataContainerProps = {
    vacancies: any[];
};

type Vacancy = {
    id: number;
    title: string;
    navigationUrl: string;
    candidateCount: number;
    createdAt: string;
    deadline: string;
    status: string;
};

