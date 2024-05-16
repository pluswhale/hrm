export type EditVacancyFormProps = {
    vacancy: Vacancy;
};

export type Vacancy = {
    id: number;
    title: string;
    created_at: string;
    deadline: string;
    preferredIncome: string;
    description: string;
    candidateRequirements: string;
    stages: StageItem[];
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

