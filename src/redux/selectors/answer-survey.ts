import { RootState } from 'redux/store';

export const questionsInAnswerSurveySelector = (state: RootState) => {
    return state.answerSurveySlice.questions;
};

