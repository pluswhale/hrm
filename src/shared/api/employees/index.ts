import { Instance } from '../api-config';

export const employeesApi = {
    getAllEmployees: (status: 'current' | 'dismissed', search?: string, keySkills?: string, positions?: string) =>
        Instance.get(
            `employee?status=${status}
            ${search ? `&search=${search}` : ''} 
            ${keySkills ? `&skills=${keySkills}` : ''} 
            ${positions ? `&positions=${positions}` : ''}`,
        ),
    getEmployeeById: (id: string) => Instance.get(`employee/${id}`),
};

