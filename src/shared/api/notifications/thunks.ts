import { notificationsApi } from '.';

export const fetchNotifications = async (options: any) => {
    try {
        const res = await notificationsApi.getNotifications(options?.type, options?.id);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const makeSeenThunk = async () => {
    try {
        const res = await notificationsApi.makeSeen();
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

