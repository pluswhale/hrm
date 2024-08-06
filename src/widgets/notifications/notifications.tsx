import { FC, useEffect, useRef } from 'react';

import style from './notifications.module.scss';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import NotificationCard from './notification-card/notification-card';
import { makeSeenThunk } from 'shared/api/notifications/thunks';
import { useQueryClient } from '@tanstack/react-query';

interface PropsType {
    setOpenNotifications: (arg: boolean) => void;
    notifications: any[];
}

const Notifications: FC<PropsType> = ({ notifications, setOpenNotifications }): JSX.Element => {
    const qc = useQueryClient();

    const fetchRef = useRef(null);
    const notificationPopupRef = useRef(null);

    useEffect(() => {
        makeSeenThunk().then(() => {
            qc.invalidateQueries({ queryKey: ['fetchNotifications'] });
        });
    }, []);

    useClickOutside(notificationPopupRef, () => setOpenNotifications(false));

    return (
        <div className={style.outside_container}>
            <div id="notifications_scroll_box" ref={notificationPopupRef} className={style.notification}>
                <div className={style.notification__container}>
                    <div className={style.notification__title_wrapper}>
                        <p className={style.notification__title_text}>Уведомления</p>
                    </div>
                    {notifications?.length > 0 &&
                        notifications?.map((notification: any) => <NotificationCard notificationItem={notification} />)}

                    <p ref={fetchRef} className={style.notification__bottom_item} />
                </div>
            </div>
        </div>
    );
};

export default Notifications;

