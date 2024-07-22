export type CandidatesDataContainerProps = {
    candidates: any[];
};

type CandidateBe = {
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

export type CandidateHc = {
    id: number;
    imageSrc: string;
    name: string;
    role: string;
    skills: string[];
};

export type Skill = {
    id: string;
    name: string;
};

