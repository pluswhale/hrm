export type AppealsDataContainerProps = {
    appeals: Appeal[];
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
};

