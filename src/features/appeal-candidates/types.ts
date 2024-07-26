export type VacancyCandidatesProps = {
    stages: any[];
};

export type CandidatesRow = {
    title: string;
    count: number;
    candidates: Candidate[] | null;
};

export type Candidate = {
    id: number;
    avatar: string | null;
    name: string;
    preferredIncome: string;
    experience: string;
};

