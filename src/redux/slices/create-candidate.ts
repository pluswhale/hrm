import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    experiences: [{ id: 1 }],
    educations: [{ id: 1 }],
} as initialStateType;

type initialStateType = {
    experiences: Experience[];
    educations: Education[];
};

type Experience = {
    id: number;
};

type Education = {
    id: number;
};

const createCandidateSlice = createSlice({
    name: 'createCandidate',
    initialState,
    reducers: {
        addNewExperience: (state) => {
            state.experiences.push({ id: state.experiences.length + 1 });
        },
        addNewEducation: (state) => {
            state.educations.push({ id: state.educations.length + 1 });
        },
        setCurrentExperience: (state, action: PayloadAction<{ experiencesLength: number }>) => {
            const { experiencesLength } = action.payload;

            if (experiencesLength) {
                state.experiences = Array.from({ length: experiencesLength }, (_, index) => ({
                    id: index + 1,
                }));
            }
        },

        setCurrentEducations: (state, action: PayloadAction<{ educationsLength: number }>) => {
            const { educationsLength } = action.payload;

            if (educationsLength) {
                state.educations = Array.from({ length: educationsLength }, (_, index) => ({
                    id: index + 1,
                }));
            }
        },
    },
});

export const { addNewExperience, addNewEducation, setCurrentEducations, setCurrentExperience } =
    createCandidateSlice.actions;
export default createCandidateSlice.reducer;

