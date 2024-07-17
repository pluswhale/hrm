import { Dispatch } from 'react';
import { userApi } from '.';
import { SetCookie } from 'shared/libs/cookies';
import { AxiosError } from 'axios';
import { loginUser } from '../../../redux/slices/auth';

export const loginUserThunk = (data: any) => (dispatch: Dispatch<any>) => {
    userApi
        .loginUser(data)
        .then((res) => {
            SetCookie('access_token', res.data.access_token);
            dispatch(getUserDataThunk());
        })

        .catch((error: AxiosError) => {
            console.log('Cant login user', error);
        });
};

export const getUserDataThunk = () => (dispatch: Dispatch<any>) => {
    userApi
        .getProfile()
        .then((res) => {
            dispatch(loginUser({ user: res?.data }));
        })
        .catch((error: AxiosError) => {
            console.log('User not found', error);
        });
};

