import { useState } from 'react';

import style from './notification-card.module.scss';
import { formatDate } from 'shared/libs/dateFormater';

interface Props {
    notificationItem: any;
}

function NotificationCard({ notificationItem }: Props) {
    const authorName = notificationItem?.authorHRManager
        ? `${notificationItem?.authorHRManager?.name}`
        : `${notificationItem?.authorEmployee?.last_name} ${notificationItem?.authorEmployee?.first_name}`;

    return (
        <div className={style.wrapper_authors_notifications}>
            <div className={style.authors_notifications} key={notificationItem.id}>
                <div className={style.notification_avatar_and_data}>
                    <div className={style.notification_data}>
                        <div className={style.notification_author_name}>{authorName}</div>
                        <div
                            className={
                                notificationItem.text?.length > 30
                                    ? style.notification_message_long
                                    : style.notification_message
                            }
                        >
                            {notificationItem.text}
                        </div>
                        <div
                            className={
                                notificationItem.is_seen
                                    ? style.notification_message_time__seen
                                    : style.notification_message_time
                            }
                        >
                            {formatDate(notificationItem?.created_at, '', 'D MMMM YYYY HH:mm')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationCard;

