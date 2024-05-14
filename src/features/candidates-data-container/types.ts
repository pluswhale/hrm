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
};
