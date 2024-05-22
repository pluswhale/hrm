import { Instance } from '../api-config';

export const appealsApi = {
    createAppeal: (body: any) => Instance.post(`appeal/appeal/create`, body),
};

