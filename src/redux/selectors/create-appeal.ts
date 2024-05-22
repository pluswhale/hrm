// seller role
import { RootState } from '../store';

export const stagesSelector = (state: RootState) => {
    return state.createAppeal.stages;
};

