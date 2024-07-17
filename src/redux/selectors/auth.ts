import { RootState } from 'redux/store';

export const userDataSelector = (state: RootState) => {
    return state.authSlice.userData;
};

export const userIsAuthorizedSelector = (state: RootState) => {
    return state.authSlice.isAuth;
};

