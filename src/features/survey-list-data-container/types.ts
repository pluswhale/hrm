export type SurveyListContainerProps = {
    Survey: Survey[],
}

type Survey = {
    id: number,
    title: string,
    navigationUrl: string,
    candidatesCount: string,
    created_at: string,
    deadline: string,
    status: string,
}