import { Instance } from '../api-config';

export const surveysApi = {
    createSurvey: (body: any) => Instance.post(`surveys`, body),
    updateSurvey: (surveyId: number, body: any) => Instance.put(`surveys/update/${surveyId}`, body),
    submitSurvey: (employeeId: number, body: any) => Instance.post(`surveys/${employeeId}/submit`, body),
    getSurveysForHR: (hrManagerId: string, sort: 'current' | 'completed' = 'current', search = '') =>
        Instance.get(`surveys/hrmanager/all/${hrManagerId}?sortBy=${sort}&search=${search}`),
    getSurveysForEmployee: (employeeId: string, sort: 'current' | 'passed' = 'current', search = '') =>
        Instance.get(`surveys/employee/${employeeId}/${sort}?search=${search}`),
    getSurveyByIdForEmployee: (surveyId: string) => Instance.get(`surveys/employee/survey/${surveyId}`),
    getSurveyByIdForHR: (surveyId: string) => Instance.get(`surveys/hrmanager/survey/${surveyId}`),
};

