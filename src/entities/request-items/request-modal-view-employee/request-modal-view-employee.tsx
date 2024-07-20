import { FC, ReactElement } from 'react';
import closeIcon from '../../../assets/close_icon.svg';
import { RequestModalProps } from './types';

import styles from './request-modal-view-employee.module.scss';
import { Button } from '../../../shared/components/button/button';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useDeleteRequest } from 'shared/api/requests/mutations';
dayjs.locale('ru');

export const RequestModalViewEmployee: FC<RequestModalProps> = ({
    onClose,
    onOpenCreateRequestModal,
    requestData,
}): ReactElement => {
    const deleteRequestMutation = useDeleteRequest();

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
            <span style={{ backgroundColor: color, color: 'white' }} className={styles.container__status}>
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

    const formatDate = (date: string) => {
        return dayjs(date).format('D MMMM YYYY HH:mm');
    };

    const onDeleteRequest = () => {
        deleteRequestMutation.mutate(requestData?.id);
        onClose();
    };

    const onPressEditRequest = () => {
        onOpenCreateRequestModal();
        onClose();
    };

    return (
        <div className={styles.request_modal}>
            <div className={styles.request_modal__container}>
                <div className={styles.request_modal__title_and_close}>
                    <span className={styles.request_modal__title}>
                        {displayType(requestData?.type)}
                        {displayStatus(requestData?.status)}
                    </span>
                    <img onClick={onClose} className={styles.request_modal__close} src={closeIcon} alt="close icon" />
                </div>
                <div className={styles.request_modal__content}>
                    <h2 className={styles.request_modal__titles}>Информация о запросе</h2>

                    <div className={styles.request_modal__wrapper_text}>
                        <span className={styles.request_modal__wrapper_title}>Дата</span>
                        <span className={styles.request_modal__wrapper_info}>
                            {formatDate(requestData?.created_at)}
                        </span>
                    </div>

                    <div className={styles.request_modal__wrapper_comment}>
                        <span className={styles.request_modal__wrapper_title}>Комментарий </span>
                        <span className={styles.request_modal__wrapper_info}>{requestData?.comment}</span>
                    </div>
                </div>
                <div className={styles.request_modal__action_buttons}>
                    <Button
                        onClick={onDeleteRequest}
                        type="button"
                        view="default_bg"
                        styles={{ width: 'fit-content', alignSelf: 'flex-end' }}
                        text="Удалить"
                    />
                    <Button
                        onClick={onPressEditRequest}
                        type="button"
                        view="default_bg"
                        styles={{ width: 'fit-content', alignSelf: 'flex-end' }}
                        text="Редактировать"
                    />
                </div>
            </div>
        </div>
    );
};

