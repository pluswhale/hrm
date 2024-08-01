import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    skills: [],
    roles: [],
    statuses: [],
    themes: [],
} as initialStateType;

type initialStateType = {
    skills: Skill[];
    roles: Role[];
    statuses: any[];
    themes: any[];
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
    value?: string;
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters: (
            state,
            action: PayloadAction<{ skills?: Skill[]; roles?: Role[]; themes?: any; statuses?: any }>,
        ) => {
            const { skills, roles, statuses, themes } = action.payload;

            if (skills && roles) {
                state.skills = skills;
                state.roles = roles;
            }

            if (statuses && themes) {
                state.statuses = statuses;
                state.themes = themes;
            }
        },
        setToggleCheckboxInFilter: (state, action: PayloadAction<{ filterSetName: string; checkboxId: number }>) => {
            const { filterSetName, checkboxId } = action.payload;

            if (filterSetName === 'По должности' || filterSetName === 'По типу') {
                state.roles = state.roles.map((role) => {
                    if (role.id === checkboxId) {
                        return { ...role, isActive: !role.isActive };
                    } else {
                        return role;
                    }
                });
            } else if (filterSetName === 'По навыкам' || filterSetName === 'По компетенциям') {
                state.skills = state.skills.map((skill) => {
                    if (skill.id === checkboxId) {
                        return { ...skill, isActive: !skill.isActive };
                    } else {
                        return skill;
                    }
                });
            } else if (filterSetName === 'По статусу') {
                state.statuses = state.statuses.map((status) => {
                    if (status.id === checkboxId) {
                        return { ...status, isActive: !status.isActive };
                    } else {
                        return status;
                    }
                });
            } else if (filterSetName === 'По теме') {
                state.themes = state.themes.map((theme) => {
                    if (theme.id === checkboxId) {
                        return { ...theme, isActive: !theme.isActive };
                    } else {
                        return theme;
                    }
                });
            }
        },
    },
});

export const { setFilters, setToggleCheckboxInFilter } = filterSlice.actions;
export default filterSlice.reducer;

