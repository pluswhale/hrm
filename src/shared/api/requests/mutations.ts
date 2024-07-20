import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateRequestBody, UpdateRequestBody } from './types';
import { requestsApi } from '.';

export const useCreateRequest = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: CreateRequestBody) => requestsApi.createRequest(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllRequestsForEmployees'] });
        },
    });
};

export const useUpdateRequest = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: UpdateRequestBody) => {
            const { requestId, ...rest } = body;

            return requestsApi.updateRequest(requestId, rest as UpdateRequestBody);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchAllRequestsForEmployees'] });
        },
    });
};

export const useDeleteRequest = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (requestId: number) => requestsApi.deleteRequest(requestId),
        onSuccess: () => {
            qc.invalidateQueries({
                queryKey: ['fetchAllRequestsForEmployees'],
            });
            qc.invalidateQueries({
                queryKey: ['fetchThemesForRequestFilterSet'],
            });
            qc.invalidateQueries({
                queryKey: ['fetchStatusesForRequestFilterSet'],
            });
        },
    });
};

