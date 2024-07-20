import { RootState } from 'redux/store';

export const skillsInFilterSelector = (state: RootState) => {
    return state.filter.skills;
};

export const rolesInFilterSelector = (state: RootState) => {
    return state.filter.roles;
};

export const themesInFilterSelector = (state: RootState) => {
    return state.filter.themes;
};

export const statusesInFilterSelector = (state: RootState) => {
    return state.filter.statuses;
};

