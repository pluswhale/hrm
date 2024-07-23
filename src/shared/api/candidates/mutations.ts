import { useMutation, useQueryClient } from '@tanstack/react-query';
import { candidatesApi } from '.';

export const useCreateCandidate = () => {
    return useMutation({
        mutationFn: (body: any) => candidatesApi.createCandidate(body),
    });
};

export const useUpdateCandidate = () => {
    return useMutation({
        mutationFn: (body: any) => candidatesApi.updateCandidate(body),
    });
};

export const useAddNewCompetence = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: { name: string }) => candidatesApi.addNewCompetence(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllCompetencesForCreatingVacancy'] });
        },
    });
};

