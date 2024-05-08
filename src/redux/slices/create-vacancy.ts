import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    stages: [],
} as initialStateType;

type initialStateType = {
    stages: Stage[];
};

type Stage = {
    id: number;
    name: string;
};

const createVacancySlice = createSlice({
    name: 'createVacancy',
    initialState,
    reducers: {
        addNewStage: (state, action: PayloadAction<{ stageName: string }>) => {
            const isItStageExists = state.stages.some(
                (stage) => stage.name.toLocaleLowerCase() === action.payload.stageName.toLocaleLowerCase(),
            );

            if (isItStageExists) return;

            state.stages.push({
                id: state.stages.length + 1,
                name: action.payload.stageName,
            });
        },
        removeStage: (state, action: PayloadAction<{ stageId: number }>) => {
            state.stages = state.stages.filter((stage) => stage.id !== action.payload.stageId);
        },

        setStages: (state, action: PayloadAction<{ stages: Array<{ id: number; name: string }> }>) => {
            state.stages = action.payload.stages;
        },
    },
});

export const { addNewStage, removeStage, setStages } = createVacancySlice.actions;
export default createVacancySlice.reducer;

