import { commentsApi } from '.';

export const fetchCommentsByUser = async (options: any) => {
    try {
        const res = await commentsApi.getCommentsByUser(options?.typeUser, options?.id);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

