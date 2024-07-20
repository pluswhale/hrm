export type CreateRequestBody = {
    type: string;
    comment: string;
    authorId: number;
};

export type UpdateRequestBody = {
    requestId: number;
    type: string;
    comment: string;
    manage_by?: string;
};

export type UpdateRequestByHRManagerBody = {
    requestId: number;
    answer: string;
    decision: string;
    manageById: number;
};

