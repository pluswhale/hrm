import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        loginUser: (state, action: PayloadAction<{ user: any }>) => {
            state.userData = action.payload.user;
            state.isAuth = true;
        },
    },
});

export const { loginUser } = authSlice.actions;

export default authSlice.reducer;

