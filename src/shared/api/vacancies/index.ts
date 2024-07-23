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
};

