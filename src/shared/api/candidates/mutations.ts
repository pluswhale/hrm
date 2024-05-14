import { useMutation } from '@tanstack/react-query';
import { candidatesApi } from '.';

export const useCreateCandidate = () => {
    return useMutation({
        mutationFn: (body: any) => candidatesApi.createCandidate(body),
    });
};

