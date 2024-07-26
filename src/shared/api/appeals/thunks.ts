import { appealsApi } from '.';

export const fetchAllAppeals = async (options: any) => {
    try {
        const res = await appealsApi.getAllAppeals(options?.isActive, options?.name);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchAppealById = async (options: any) => {
    try {
        const res = await appealsApi.getAppealById(options?.appealId);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchConversionByAppealId = async (options: any) => {
    try {
        const res = await appealsApi.getConversionByAppealId(options?.appealId);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

