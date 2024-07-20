import { requestsApi } from '.';

export const fetchAllRequestsForEmployee = async (options: any) => {
    try {
        const res = await requestsApi.getAllRequests(options?.employeeId, options?.search, options?.body);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchRequestById = async (options: any) => {
    try {
        const res = await requestsApi.getRequestById(options?.id);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

