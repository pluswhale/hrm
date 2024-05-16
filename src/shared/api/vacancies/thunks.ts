import { vacanciesApi } from '.';

export const fetchAllVacancies = (options: any) => {
    try {
        const res = vacanciesApi.getAllVacancies(options?.isActive);
        if (res) {
            return res;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchVacancyById = async (options: any) => {
    try {
        const res = await vacanciesApi.getVacancyById(options?.vacancyId);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

