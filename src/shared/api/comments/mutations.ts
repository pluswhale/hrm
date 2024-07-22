import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commentsApi } from '.';
import { CreateCommentBody, UpdateCommentBody } from './types';

export const useCreateComment = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: CreateCommentBody) => commentsApi.create(body),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchCommentsByUser'] });
        },
    });
};

export const useDeleteComment = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (commentId: string) => commentsApi.delete(commentId),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchCommentsByUser'] });
        },
    });
};

export const useUpdateComment = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (body: { commentId: string; updatedText: UpdateCommentBody }) =>
            commentsApi.edit(body.commentId, body.updatedText),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['fetchCommentsByUser'] });
        },
    });
};

