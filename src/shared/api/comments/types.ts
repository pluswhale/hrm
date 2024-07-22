export type CreateCommentBody = {
    authorId: number;
    employeeId?: number;
    candidateId?: number;
    text: string;
};

export type UpdateCommentBody = {
    text: string;
};

