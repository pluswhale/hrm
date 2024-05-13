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

