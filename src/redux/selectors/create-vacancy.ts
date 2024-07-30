import { RootState } from '../store';

export const stagesSelector = (state: RootState) => {
    return state.createVacancy.stages;
};

