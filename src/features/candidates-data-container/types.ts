export type CandidatesDataContainerProps = {
    candidates: Candidate[],
}

type Candidate = {
    id: number,
    imageSrc: string,
    name: string,
    role: string,
    skills: string[]
}