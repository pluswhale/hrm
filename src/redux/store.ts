import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { AnyAction, configureStore, createAction, ThunkDispatch } from '@reduxjs/toolkit';
import createVacancy from './slices/create-vacancy';

const rootReducer = combineReducers({
    createVacancy,
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

