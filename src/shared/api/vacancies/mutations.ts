import { useMutation } from '@tanstack/react-query';
import { vacanciesApi } from '.';

export const useCreateVacancy = () => {
    return useMutation({
        mutationFn: (body: any) => vacanciesApi.createVacancy(body),
    });
};

