export type SurveyListContainerProps = {
    surveys: any[];
};

type Survey = {
    id: number;
    title: string;
    navigationUrl: string;
    candidatesCount: string;
    created_at: string;
    deadline: string;
    status: string;
};
