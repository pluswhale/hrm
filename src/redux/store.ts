import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { AnyAction, configureStore, createAction, ThunkDispatch } from '@reduxjs/toolkit';
import createVacancy from './slices/create-vacancy';
import createCandidate from './slices/create-candidate';
import filter from './slices/filter';
import createAppeal from './slices/create-appeal';
import createSurvey from './slices/create-survey';
import authSlice from './slices/auth';

const rootReducer = combineReducers({
    authSlice,
    createVacancy,
    createAppeal,
    createCandidate,
    createSurvey,
    filter,
});

// Create the store
const store = configureStore({
    reducer: rootReducer,
});

// Types
export const setProductImg = createAction('newApplication/setProductImg');
export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunkType = ThunkDispatch<RootStateType, void, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkType>();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

