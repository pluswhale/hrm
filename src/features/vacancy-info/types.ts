export type VacancyInfoProps = {
    vacancy: Vacancy;
};

export type Vacancy = {
    created_at: string;
    deadline: string;
    preferredIncome: string;
    candidateRequirements: string[];
    city: string;
    createdAt: string;
    createdBy: string | null;
    dateCreated: string;
    dateDeleted: string | null;
    dateModified: string;
    description: string;
    expiredAt: string;
    hhId: number;
    id: string;
    isActive: boolean;
    isDeleted: boolean;
    modifiedBy: string | null;
    name: string;
    salary: string;
};

