import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
} as initialStateType;

type initialStateType = {
    questions: any[];
};

const answerSurveySlice = createSlice({
    name: 'answerSurvey',
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<{ questions: any[] }>) => {
            state.questions = action.payload.questions;
        },
        answerTextQuestion: (state, action: PayloadAction<{ questionId: any; value: string }>) => {
            state.questions = state.questions.map((question) => {
                const { questionId, value } = action.payload;
                if (question.id === questionId) {
                    return { ...question, textAnswer: value };
                } else {
                    return question;
                }
            });
        },

        answerOptionQuestion: (
            state,
            action: PayloadAction<{ questionId: number; optionId: number; type: 'multiple' | 'one' }>,
        ) => {
            state.questions = state.questions.map((question) => {
                const { questionId, optionId, type } = action.payload;
                if (question.id === questionId) {
                    const modifiedOptions = question.options.map((option: any) => {
                        if (option.id === optionId) {
                            return { ...option, checked: !option.checked };
                        } else {
                            if (type === 'multiple') {
                                return option;
                            } else {
                                return { ...option, checked: false };
                            }
                        }
                    });
                    return { ...question, options: modifiedOptions };
                } else {
                    return question;
                }
            });
        },
    },
});

export const { setQuestions, answerOptionQuestion, answerTextQuestion } = answerSurveySlice.actions;

export default answerSurveySlice.reducer;

