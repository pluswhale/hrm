import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stage } from 'shared/types/stage.type';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    stages: [],
} as initialStateType;

type initialStateType = {
    stages: Stage[];
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
                id: uuidv4(),
                name: action.payload.stageName,
                position: state.stages.length + 1,
            });
        },
        removeStage: (state, action: PayloadAction<{ stageId: string }>) => {
            state.stages = state.stages.filter((stage) => stage.id !== action.payload.stageId);
        },

        setStages: (state, action: PayloadAction<{ stages: Stage[] }>) => {
            state.stages = action.payload.stages;
        },
    },
});

export const { addNewStage, removeStage, setStages } = createVacancySlice.actions;
export default createVacancySlice.reducer;

