import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { surveysApi } from '.';

export const useCreateSurvey = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: any) => surveysApi.createSurvey(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllSurveysByHR'] });
            navigate('/survey');
        },
    });
};

export const useSubmitSurvey = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: async (body: any) => {
            const { employeeId, ...rest } = body;
            return surveysApi.submitSurvey(employeeId, rest).then(() => employeeId);
        },
        onSuccess: (data: any, context: any) => {
            qc.invalidateQueries({ queryKey: ['fetchSurveyByIdForEmployee'] });
            navigate(`/surveys/employee/${context}`);
        },
    });
};

export const useUpdateSurvey = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: async (body: any) => {
            const { surveyId, ...rest } = body;
            return surveysApi.updateSurvey(surveyId, rest).then(() => surveyId);
        },
        onSuccess: (data: any, context: any) => {
            qc.invalidateQueries({ queryKey: ['fetchSurveyByIdForHR'] });

            navigate(`/survey/${context?.surveyId}`);
        },
    });
};

