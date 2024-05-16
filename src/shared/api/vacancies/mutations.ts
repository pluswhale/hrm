import { useMutation, useQueryClient } from '@tanstack/react-query';
import { vacanciesApi } from '.';
import { useNavigate } from 'react-router';

export const useCreateVacancy = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: any) => vacanciesApi.createVacancy(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllVacancies'] });
            navigate('/vacancies');
        },
    });
};

