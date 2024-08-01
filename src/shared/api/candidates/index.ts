import { Instance } from '../api-config';

export const candidatesApi = {
    getAllCandidates: (search = '', competences?: string, type?: 'vacancy' | 'appeal') =>
        Instance.get(
            `candidates?type=${type}
            ${search ? `&search=${search}` : ''} 
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

