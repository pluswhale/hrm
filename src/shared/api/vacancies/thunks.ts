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

