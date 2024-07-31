import { surveysApi } from '.';

export const fetchAllSurveysForHR = async (options: any) => {
    try {
        const res = await surveysApi.getSurveysForHR(options?.sort, options?.search);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchAllSurveysForEmployee = async (options: any) => {
    try {
        const res = await surveysApi.getSurveysForEmployee(options?.employeeId, options?.sort, options?.search);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

