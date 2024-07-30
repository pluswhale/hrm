import { RootState } from '../store';

export const questionsInCreateSurveySelector = (state: RootState) => {
    return state.createSurvey.questions;
};
