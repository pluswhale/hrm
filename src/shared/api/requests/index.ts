import { Instance } from '../api-config';
import { CreateRequestBody, UpdateRequestBody, UpdateRequestByHRManagerBody } from './types';

export const requestsApi = {
    // Employee Role
    getAllRequestsByEmployee: (employeeId: number, search?: string, body?: { status?: string; theme?: string }) =>
        Instance.post(
            `requests/employee/${employeeId}
            ${search ? `?search=${search}` : ''}`,
            body,
        ),
    getRequestById: (id: string) => Instance.get(`requests/${id}`),
    createRequest: (body: CreateRequestBody) => Instance.post('requests', body),
    updateRequest: (requestId: number, body: UpdateRequestBody) => Instance.put(`requests/${requestId}`, body),
    deleteRequest: (requestId: number) => Instance.delete(`requests/${requestId}`),

    // HRManager Role

    getAllRequests: (search?: string, body?: { status?: string; theme?: string }) =>
        Instance.post(
            `requests/all
            ${search ? `?search=${search}` : ''}`,
            body,
        ),

    makeSeen: (requestId?: number) => Instance.put(`requests/make-seen/${requestId}`),
    answerRequestByHR: (requestId: number, body: UpdateRequestByHRManagerBody) =>
        Instance.put(`requests/answer/${requestId}`, body),
};

