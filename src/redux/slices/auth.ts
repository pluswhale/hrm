import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from 'shared/types/employee.type';
import { HRManager } from 'shared/types/hr-manager.type';

const initialState = {
    isAuth: false,
} as initialStateType;

type initialStateType = {
    isAuth: boolean;
    userData: any;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<{ user: Employee | HRManager }>) => {
            state.userData = action.payload.user;
            state.isAuth = true;
        },
    },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;

