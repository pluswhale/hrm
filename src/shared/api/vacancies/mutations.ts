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

export const useUpdateVacancy = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: any) => vacanciesApi.updateVacancy(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllVacancies'] });
            navigate('/vacancies');
        },
    });
};

export const useDeleteVacancy = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (vacancyId: string) => vacanciesApi.deleteVacancyById(vacancyId),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllVacancies'] });
            navigate('/vacancies');
        },
    });
};

export const useSetVacancyStatus = () => {
    const navigate = useNavigate();
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: { vacancyId: string; status: boolean }) => {
            const { vacancyId, ...rest } = body;
            return vacanciesApi.setVacancyStatusById(vacancyId, rest);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllVacancies'] });
            navigate('/vacancies');
        },
    });
};

