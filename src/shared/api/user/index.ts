import { Instance } from '../api-config';

export const userApi = {
    registerUser: (body: any) => Instance.post('auth/register', body),
    loginUser: (body: any) => Instance.post('auth/login', body),
    getProfile: () => Instance.get('auth/profile'),
};

