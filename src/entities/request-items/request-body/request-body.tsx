import { FC, ReactElement } from 'react';

import { Request } from 'shared/types/request.type';

import styles from './request-body.module.scss';
import { formatDate } from 'shared/libs/dateFormater';

type Props = {
    requestData: Request;
};

export const RequestBody: FC<Props> = ({ requestData }): ReactElement => {
    const displayStatus = (status: string) => {
        let color;
        let text;

        switch (status) {
            case 'new':
                color = '#6362E7';
                text = 'Новый';
                break;
            case 'approved':
                color = '#81C314';
                text = 'Одобрен';
                break;
            case 'rejected':
                color = '#DD5555';
                text = 'Отклонен';
                break;
            default:
                color = '#E7D10D';
                text = 'Просмотрен';
        }

        return (
            <span style={{ backgroundColor: color, color: 'white' }} className={styles.request_modal__status}>
                {text}
            </span>
        );
    };

    const displayType = (type: string) => {
        switch (type) {
            case 'meeting with management':
                return 'Встреча с руководством';
            case 'vacation':
                return 'Отпуск';
            case 'compensation':
                return 'Компенсация';
            case 'offer':
                return 'Предложение';

            default:
                return 'Другое';
        }
    };

    return (
        <div className={styles.request_modal__container}>
            <div className={styles.request_modal__title_and_close}>
                <span className={styles.request_modal__title}>
                    <h2 className={styles.request_modal__titles}>Информация о запросе</h2>
                    {displayStatus(requestData?.status)}
                </span>
            </div>
            <div className={styles.request_modal__content}>
                <div className={styles.request_modal__wrapper_text}>
                    <span className={styles.request_modal__wrapper_title}>Автор: </span>
                    <span className={styles.request_modal__wrapper_info}>
                        {requestData?.author?.last_name + ' ' + requestData?.author?.first_name}
                    </span>
                </div>
                <div className={styles.request_modal__wrapper_text}>
                    <span className={styles.request_modal__wrapper_title}>Дата: </span>
                    <span className={styles.request_modal__wrapper_info}>{formatDate(requestData?.created_at)}</span>
                </div>

                <div className={styles.request_modal__wrapper_comment}>
                    <span className={styles.request_modal__wrapper_title}>Комментарий </span>
                    <span className={styles.request_modal__wrapper_info}>{requestData?.comment}</span>
                </div>
            </div>
        </div>
    );
};

