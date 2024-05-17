import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    skills: [],
    roles: [],
} as initialStateType;

type initialStateType = {
    skills: Skill[];
    roles: Role[];
};

type Skill = {
    id: number;
    name: string;
    isActive: boolean;
};

type Role = {
    id: number;
    name: string;
    isActive: boolean;
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<{ skills: Skill[]; roles: Role[] }>) => {
            state.skills = action.payload.skills;
            state.roles = action.payload.roles;
        },
    },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;

