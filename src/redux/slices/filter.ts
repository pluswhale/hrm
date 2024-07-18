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
    count: number;
};

type Role = {
    id: number;
    name: string;
    isActive: boolean;
    count: number;
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<{ skills: Skill[]; roles: Role[] }>) => {
            state.skills = action.payload.skills;
            state.roles = action.payload.roles;
        },
        setToggleCheckboxInFilter: (state, action: PayloadAction<{ filterSetName: string; checkboxId: number }>) => {
            const { filterSetName, checkboxId } = action.payload;

            if (filterSetName === 'По должности') {
                state.roles = state.roles.map((role) => {
                    if (role.id === checkboxId) {
                        return { ...role, isActive: !role.isActive };
                    } else {
                        return role;
                    }
                });
            } else if (filterSetName === 'По навыкам') {
                state.skills = state.skills.map((skill) => {
                    if (skill.id === checkboxId) {
                        return { ...skill, isActive: !skill.isActive };
                    } else {
                        return skill;
                    }
                });
            }
        },
    },
});

export const { setFilters, setToggleCheckboxInFilter } = filterSlice.actions;
export default filterSlice.reducer;

