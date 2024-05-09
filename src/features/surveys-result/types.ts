export interface SurveyResult {
    id: string;
    percent: number;
    name: string;
}

export interface Props {
    surveysResults: SurveyResult[];
}