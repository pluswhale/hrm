import { employeesApi } from '.';

export const fetchAllEmployees = async (options: any) => {
    try {
        const res = await employeesApi.getAllEmployees(
            options?.status,
            options?.search,
            options?.keySkills,
            options?.positions,
        );
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchEmployeeById = async (options: any) => {
    try {
        const res = await employeesApi.getEmployeeById(options?.id);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

