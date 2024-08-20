export type PracticeCardProps = {
    navUrl: string;
    id: number;
    name: string;
    created_at: Date | undefined | string;
    deadline: Date | undefined | null;
    is_active: boolean;
    desired_count_candidates: string | undefined;
};

