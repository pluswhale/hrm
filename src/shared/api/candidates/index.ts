import { Instance } from '../api-config';

export const candidatesApi = {
    getAllCandidates: () => Instance.get('candidates/candidate/candidates/'),
    getCandidateById: (id: string) => Instance.get(`candidates/candidate/candidate/${id}`),
    createCandidate: (body: any) => Instance.post(`candidates/candidate/candidate/create`, body),
};

