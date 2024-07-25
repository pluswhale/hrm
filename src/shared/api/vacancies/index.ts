import { Instance } from '../api-config';

export const vacanciesApi = {
    createVacancy: (body: any) => Instance.post(`vacancies`, body),
    updateVacancy: (body: any) => {
        const { vacancyId, ...rest } = body;
        return Instance.put(`vacancies/${vacancyId}`, rest);
    },
    getAllVacancies: (isActive = true, name?: string) =>
        Instance.get(`vacancies?isActive=${isActive}${name ? `&name=${name}` : ''}`),
    getVacancyById: (vacancyId: string) => Instance.get(`vacancies/${vacancyId}`),
    deleteVacancyById: (vacancyId: string) => Instance.delete(`vacancies/${vacancyId}`),
    setVacancyStatusById: (vacancyId: string, body: { status: boolean }) =>
        Instance.patch(`vacancies/${vacancyId}/set-status`, body),
    bindCandidatesToVacancy: (vacancyId: string, body: { candidateIds: number[] }) =>
        Instance.patch(`vacancies/${vacancyId}/bind-candidates`, body),

    moveCandidateInStages: (vacancyId: string, candidateId: number, body: { fromStageId: number; toStageId: number }) =>
        Instance.patch(`vacancies/${vacancyId}/candidates/${candidateId}/move`, body),
    getConversionByVacancyId: (vacancyId: string) => Instance.get(`vacancies/${vacancyId}/stage-conversions`),
};

