import { Instance } from '../api-config';

export const candidatesApi = {
    getAllCandidates: (search = '', competences?: string) =>
        Instance.get(
            `candidates
            ${search ? `?search=${search}` : ''} 
            ${competences ? `&competences=${competences}` : ''}`,
        ),
    getCandidateById: (id: string) => Instance.get(`candidates/${id}`),
    createCandidate: (body: any) => Instance.post(`candidates/`, body),
    updateCandidate: (body: any) => {
        const { candidateId, ...rest } = body;
        return Instance.patch(`candidates/${candidateId}`, rest);
    },
    getAllCompetences: () => Instance.get(`candidates/get/competences`),
    addNewCompetence: (body: { name: string }) => Instance.post(`candidates/add/competences`, body),
};

