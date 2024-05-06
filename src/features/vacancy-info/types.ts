export type VacancyInfoProps = {
    vacancy: Vacancy;
};

export type Vacancy = {
    title: string;
    created_at: string;
    deadline: string;
    preferredIncome: string;
    description: string[];
    candidateRequirements: string[];
};
