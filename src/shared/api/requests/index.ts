import { Instance } from '../api-config';
import { CreateRequestBody, UpdateRequestBody } from './types';

export const requestsApi = {
    // Employee Role
    getAllRequests: (employeeId: number, search?: string, body?: { status?: string; theme?: string }) =>
        Instance.post(
            `requests/employee/${employeeId}
            ${search ? `?search=${search}` : ''}`,
            body,
        ),
    getRequestById: (id: string) => Instance.get(`requests/${id}`),
    createRequest: (body: CreateRequestBody) => Instance.post('requests', body),
    updateRequest: (requestId: number, body: UpdateRequestBody | { requestId: number }) =>
        Instance.put(`requests/${requestId}`, body),
    deleteRequest: (requestId: number) => Instance.delete(`requests/${requestId}`),

    // HRManager Role
};

