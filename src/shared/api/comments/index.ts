import { Instance } from '../api-config';
import { CreateCommentBody, UpdateCommentBody } from './types';

export const commentsApi = {
    create: (body: CreateCommentBody) => Instance.post(`comments/`, body),
    delete: (commentId: string) => Instance.delete(`comments/${commentId}`),
    edit: (commentId: string, body: UpdateCommentBody) => Instance.put(`comments/${commentId}`, body),
    getCommentsByEmployee: (targetProfileId: string) => Instance.get(`comments/employee/${targetProfileId}`),
};

