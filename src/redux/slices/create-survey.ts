import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
} as initialStateType;

type initialStateType = {
    questions: Question_SURVEY[];
};

export type Question_SURVEY = {
    position: number;
    title: string;
    mode: 'read' | 'edit';
    type: OptionType_SURVEY_OPTION;
    options: Option_SURVEY_QUESTION[];
};

export type Option_SURVEY_QUESTION = {
    position: number;
    type: OptionType_SURVEY_OPTION;
    optionName?: string;
    mode: 'read' | 'edit';
};

export type OptionType_SURVEY_OPTION = 'short_text' | 'long_text' | 'one_variant' | 'multiple_variants';

const createSurveySlice = createSlice({
    name: 'createSurvey',
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<{ questions: any }>) => {
            const { questions } = action.payload;
            const questionsWithPositions = questions?.map((question: any, index: number) => {
                if (question?.options?.length) {
                    const modifiedOptions = question?.options?.map((option: any, index: number) => ({
                        ...option,
                        position: index + 1,
                    }));

                    return { ...question, position: index + 1, mode: 'read', options: modifiedOptions };
                } else {
                    return { ...question, position: index + 1, mode: 'read' };
                }
            });
            state.questions = questionsWithPositions;
        },

        addQuestion: (state, action: PayloadAction<{ question: Question_SURVEY }>) => {
            const { question } = action.payload;
            const questionWithPosition = { ...question, position: state.questions.length + 1 };
            state.questions = state.questions.concat(questionWithPosition);
        },

        editQuestion: (
            state,
            action: PayloadAction<{ questionPosition?: number; optionPosition?: number; value?: string }>,
        ) => {
            const { questionPosition, optionPosition, value } = action.payload;
            if (questionPosition && !optionPosition) {
                state.questions = state.questions.map((question) => {
                    if (question.position === questionPosition) {
                        return { ...question, title: value || '' };
                    } else return question;
                });
            } else if (questionPosition && optionPosition) {
                state.questions = state.questions.map((question) => {
                    if (question.position === questionPosition) {
                        const changedOptions = (question.options = question.options.map((option) => {
                            if (option.position === optionPosition) {
                                return { ...option, optionName: value };
                            } else return option;
                        }));
                        return { ...question, options: changedOptions };
                    } else {
                        return question;
                    }
                });
            }
        },
        changeModeInQuestionOrOption: (
            state,
            action: PayloadAction<{ questionPosition?: number; optionPosition?: number; mode?: 'edit' | 'read' }>,
        ) => {
            const { questionPosition, optionPosition, mode } = action.payload;
            if (questionPosition && !optionPosition) {
                state.questions = state.questions.map((question) => {
                    if (question.position === questionPosition) {
                        return { ...question, mode: mode || 'read' };
                    } else return question;
                });
            } else if (questionPosition && optionPosition) {
                state.questions = state.questions.map((question) => {
                    if (question.position === questionPosition) {
                        const changedOptions = (question.options = question.options.map((option) => {
                            if (option.position === optionPosition) {
                                return { ...option, mode: mode || 'read' };
                            } else return option;
                        }));
                        return { ...question, options: changedOptions };
                    } else {
                        return question;
                    }
                });
            }
        },
        addNewOptionInQuestion: (
            state,
            action: PayloadAction<{ questionPosition?: number; optionType?: OptionType_SURVEY_OPTION }>,
        ) => {
            const { questionPosition, optionType } = action.payload;
            if (questionPosition) {
                state.questions = state.questions.map((question) => {
                    if (question.position === questionPosition) {
                        const newOption = {
                            position: question.options.length + 1,
                            type: optionType || 'one_variant',
                            mode: 'read',
                            optionName: 'Вариант ' + Number(question?.options?.length + 1),
                        } as Option_SURVEY_QUESTION;
                        const updatedOptions = [...question.options, newOption];
                        return { ...question, options: updatedOptions };
                    } else return question;
                });
            }
        },
        deleteQuestion: (state, action: PayloadAction<{ questionPosition?: number }>) => {
            const { questionPosition } = action.payload;
            state.questions = state.questions.filter((question) => question.position !== questionPosition);
        },

        deleteOption: (state, action: PayloadAction<{ questionPosition?: number; optionPosition?: number }>) => {
            const { questionPosition, optionPosition } = action.payload;
            state.questions = state.questions.map((question) => {
                if (question.position === questionPosition) {
                    const filteredOptions = question.options.filter((option) => option.position !== optionPosition);
                    return { ...question, options: filteredOptions };
                } else return question;
            });
        },
    },
});

export const {
    setQuestions,
    addQuestion,
    addNewOptionInQuestion,
    changeModeInQuestionOrOption,
    editQuestion,
    deleteOption,
    deleteQuestion,
} = createSurveySlice.actions;
export default createSurveySlice.reducer;

