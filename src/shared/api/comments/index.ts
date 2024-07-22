import { Instance } from '../api-config';
import { CreateCommentBody, UpdateCommentBody } from './types';

export const commentsApi = {
    create: (body: CreateCommentBody) => Instance.post(`comments/`, body),
    delete: (commentId: string) => Instance.delete(`comments/${commentId}`),
    edit: (commentId: string, body: UpdateCommentBody) => Instance.put(`comments/${commentId}`, body),
    getCommentsByUser: (typeUser: 'employee' | 'candidate', targetProfileId: string) =>
        Instance.get(`comments/${typeUser}/${targetProfileId}`),
};

