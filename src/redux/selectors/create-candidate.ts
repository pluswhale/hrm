// seller role
import { RootState } from '../store';

export const experiencesSelector = (state: RootState) => {
    return state.createCandidate.experiences;
};

export const educationsSelector = (state: RootState) => {
    return state.createCandidate.educations;
};
