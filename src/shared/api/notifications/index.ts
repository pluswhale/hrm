import { Instance } from '../api-config';

export const notificationsApi = {
    getNotifications: (type: 'employee' | 'hrManager', id: number) =>
        Instance.get(`notifications?type=${type}&id=${id}`),
    makeSeen: () => Instance.get(`notifications/make-seen`),
};

