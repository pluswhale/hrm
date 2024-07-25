import { vacanciesApi } from '.';

export const fetchAllVacancies = async (options: any) => {
    try {
        const res = await vacanciesApi.getAllVacancies(options?.isActive, options?.name);
        if (res) {
            return res.data;
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

export const fetchConversionByVacancyId = async (options: any) => {
    try {
        const res = await vacanciesApi.getConversionByVacancyId(options?.vacancyId);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

