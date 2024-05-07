import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: '',
};

const createVacancySlice = createSlice({
    name: 'createVacancy',
    initialState,
    reducers: {},
});

export const {} = createVacancySlice.actions;
export default createVacancySlice.reducer;

