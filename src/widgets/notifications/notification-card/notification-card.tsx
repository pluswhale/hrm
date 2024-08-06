import { useState } from 'react';

import style from './notification-card.module.scss';
import { formatDate } from 'shared/libs/dateFormater';

interface Props {
    notificationItem: any;
}

function NotificationCard({ notificationItem }: Props) {
    const [openLongComment, setOpenLongComment] = useState(false);

    const openOneLongComment = (lengthText: number) => {
        if (lengthText <= 30) {
            return;
        }
        setOpenLongComment(!openLongComment);
    };

    return (
        <div className={style.wrapper_autors_notifications}>
            <div className={style.autors_notifications} key={notificationItem.id}>
                <div className={style.notification_avatar_and_data}>
                    <div className={style.notification_data}>
                        <div className={style.notification_autor_name}></div>
                        <div
                            className={
                                notificationItem.text?.length > 30
                                    ? style.notification_message_long
                                    : style.notification_message
                            }
                            onClick={() => {
                                openOneLongComment(notificationItem?.text?.length);
                            }}
                        >
                            {!openLongComment
                                ? notificationItem?.text > 30
                                    ? `${notificationItem?.text?.slice(0, 30)}...`
                                    : notificationItem.text
                                : notificationItem.text}
                        </div>
                        <div
                            className={
                                notificationItem.is_seen
                                    ? style.notification_message_time__readed
                                    : style.notification_message_time
                            }
                        >
                            {formatDate(notificationItem?.created_at)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationCard;

