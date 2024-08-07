import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StageAppeal } from 'shared/types/stage-appeal.type';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    stages: [],
} as initialStateType;

type initialStateType = {
    stages: StageAppeal[];
};

const createAppealSlice = createSlice({
    name: 'createAppeal',
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
        removeStage: (state, action: PayloadAction<{ stageId: number | string }>) => {
            state.stages = state.stages.filter((stage) => stage.id !== action.payload.stageId);
        },

        setStages: (state, action: PayloadAction<{ stages: StageAppeal[] }>) => {
            state.stages = action.payload.stages;
        },
    },
});

export const { addNewStage, removeStage, setStages } = createAppealSlice.actions;
export default createAppealSlice.reducer;

