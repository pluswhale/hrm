import { useMutation, useQueryClient } from '@tanstack/react-query';
import { appealsApi } from '.';
import { useNavigate } from 'react-router';

export const useCreateAppeal = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (body: any) => appealsApi.createAppeal(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllAppeals'] });
            navigate('/appeals');
        },
    });
};

