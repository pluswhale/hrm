import { commentsApi } from '.';

export const fetchCommentsByEmployee = async (options: any) => {
    try {
        const res = await commentsApi.getCommentsByEmployee(options?.id);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

