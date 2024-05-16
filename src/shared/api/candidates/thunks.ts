import { candidatesApi } from '.';

export const fetchAllCandidates = () => {
    try {
        const res = candidatesApi.getAllCandidates();
        if (res) {
            return res;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchCandidateById = (queryOptions: any) => {
    try {
        const res = candidatesApi.getCandidateById(queryOptions?.id);
        if (res) {
            return res;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

