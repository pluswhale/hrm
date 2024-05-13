import { Instance } from '../api-config';

export const candidatesApi = {
    getAllCandidates: () => Instance.get('candidates/candidate/candidates/'),
};

