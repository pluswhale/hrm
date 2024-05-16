import { Instance } from '../api-config';

export const vacanciesApi = {
    createVacancy: (body: any) => Instance.post(`vacancy/vacancy/create`, body),
    getAllVacancies: (isActive: boolean) => Instance.get(`vacancy/vacancy/vacancies?isActive=${isActive}`),
    getVacancyById: (vacancyId: string) => Instance.get(`vacancy/vacancy/detail/${vacancyId}`),
};

