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
            navigate('/appeals');
        },
    });
};

