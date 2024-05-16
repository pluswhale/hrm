export type EditVacancyFormProps = {
    vacancy: Vacancy;
    stages: { id: string; name: string; position: number }[];
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

export type StageItemProps = {
    stage: StageItem;
    onDelete: (stageId: string) => void;
};

export type StageItem = {
    id: string;
    name: string;
    position: number;
};

