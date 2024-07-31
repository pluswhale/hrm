import { Instance } from '../api-config';

export const surveysApi = {
    createSurvey: (body: any) => Instance.post(`surveys`, body),
    getSurveysForHR: (sort: 'current' | 'completed' = 'current', search = '') =>
        Instance.get(`surveys/hrmanager?sortBy${sort}&search=${search}`),
    getSurveysForEmployee: (employeeId: string, sort: 'current' | 'completed' = 'current', search = '') =>
        Instance.get(`surveys/employee/${employeeId}?sortBy${sort}&search=${search}`),
};

