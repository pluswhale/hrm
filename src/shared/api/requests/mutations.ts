import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateRequestBody, UpdateRequestBody, UpdateRequestByHRManagerBody } from './types';
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
            Promise.all([
                qc.invalidateQueries({
                    queryKey: ['fetchAllRequestsForEmployees'],
                }),
                qc.invalidateQueries({
                    queryKey: ['fetchThemesForRequestFilterSet'],
                }),
                qc.invalidateQueries({
                    queryKey: ['fetchStatusesForRequestFilterSet'],
                }),
            ]);
        },
    });
};

export const useMakeSeenRequest = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (requestId: number) => requestsApi.makeSeen(requestId),
        onSuccess: () => {
            Promise.all([
                qc.invalidateQueries({
                    queryKey: ['fetchAllRequests'],
                }),
                qc.invalidateQueries({ queryKey: ['fetchThemesForRequestFilterSet'] }),
                qc.invalidateQueries({ queryKey: ['fetchStatusesForRequestFilterSet'] }),
            ]);
        },
    });
};

export const useUpdateRequestByHRManager = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: UpdateRequestByHRManagerBody) => {
            const { requestId, ...rest } = body;
            return requestsApi.answerRequestByHR(requestId, rest as UpdateRequestByHRManagerBody);
        },
        onSuccess: () => {
            Promise.all([
                qc.invalidateQueries({
                    queryKey: ['fetchAllRequests'],
                }),
                qc.invalidateQueries({
                    queryKey: ['fetchRequestById'],
                }),
                qc.invalidateQueries({ queryKey: ['fetchThemesForRequestFilterSet'] }),
                qc.invalidateQueries({ queryKey: ['fetchStatusesForRequestFilterSet'] }),
            ]);
        },
    });
};

