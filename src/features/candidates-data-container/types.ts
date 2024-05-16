export type CandidatesDataContainerProps = {
    candidates: Candidate[];
};

type Candidate = {
    email: string;
    event: any | null;
    firstName: string;
    hrmUserId: string;
    secondName: string;
    surname: string;
    tgLogn: string;
    workYears: number;
    skills: Skill[];
};

export type Skill = {
    id: string;
    name: string;
};

