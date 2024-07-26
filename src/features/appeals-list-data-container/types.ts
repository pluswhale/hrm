export type AppealsDataContainerProps = {
    appeals: Appeal[];
};

export type Appeal = {
    id: number;
    name: string;
    created_at: string;
    deadline: string;
    is_active: boolean;
    desired_count_candidates: string;
    responsibilities: string;
    requirements: string;
};

