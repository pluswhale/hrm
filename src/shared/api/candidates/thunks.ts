import { candidatesApi } from '.';

export const fetchAllCandidates = async (options: any) => {
    try {
        const res = await candidatesApi.getAllCandidates(options?.search, options?.competences);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchCandidateById = async (queryOptions: any) => {
    try {
        const res = await candidatesApi.getCandidateById(queryOptions?.id);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchAllCompetences = async () => {
    try {
        const res = await candidatesApi.getAllCompetences();
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

