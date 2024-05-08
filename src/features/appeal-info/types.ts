export type AppealInfoProps = {
    appeal: Appeal;
};

type Appeal = {
    id: number;
    title: string;
    created_at: string;
    navigationUrl: string;
    deadline: string;
    status: string;
    seats: string;
    accepted: string;
    description: string[];
    requirements: string[];
};

