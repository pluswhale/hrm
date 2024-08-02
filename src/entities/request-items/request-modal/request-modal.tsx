import { FC, ReactElement, useEffect, useState } from 'react';
import closeIcon from '../../../assets/close_icon.svg';
import { RequestModalProps } from './types';
import redaction from '../../../assets/Редактировать.svg';
import Delete from '../../../assets/Удалить.svg';
import styles from './request-modal.module.scss';
import { Button } from '../../../shared/components/button/button';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useMakeSeenRequest, useUpdateRequestByHRManager } from 'shared/api/requests/mutations';
import { UpdateRequestByHRManagerBody } from 'shared/api/requests/types';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
dayjs.locale('ru');

export const RequestModal: FC<RequestModalProps> = ({
    onClose,
    requestData,
    setCurrentRequestObjectForModal,
}): ReactElement => {
    const userId = useSelector(userDataSelector)?.id;
    const makeSeenMutation = useMakeSeenRequest();
    const updateRequestByHRManagerMutation = useUpdateRequestByHRManager();
    const [answerValue, setAnswerValue] = useState<string>('');

    useEffect(() => {
        if (requestData?.status === 'new') {
            makeSeenMutation.mutate(requestData?.id);
            setCurrentRequestObjectForModal((prev: any) => ({ ...prev, status: 'seen' }));
        }
    }, [requestData?.id, requestData?.status]);

    const displayStatus = (status: string) => {
        let color;
        let text;

        switch (status) {
            case 'new':
                color = '$purple';
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
            <span style={{ backgroundColor: color, color: '$white' }} className={styles.request_modal__status}>
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

    const onAnswerByHR = (decision: string) => {
        const body = {
            requestId: requestData?.id,
            answer: answerValue,
            decision,
            manageById: userId,
        } as UpdateRequestByHRManagerBody;

        updateRequestByHRManagerMutation.mutate(body);

        onClose();
    };

    let modalContent;
    if (requestData?.status === 'new' || requestData?.status === 'seen') {
        modalContent = (
            <div className={styles.request_modal__content}>
                <h2 className={styles.request_modal__titles}>Ответ на запрос</h2>
                <textarea
                    value={answerValue}
                    onChange={({ target }) => setAnswerValue(target.value)}
                    placeholder="Комментарий..."
                    className={styles.request_modal__textarea}
                />
                <div className={styles.request_modal__wrappper_card}>
                    <Button
                        onClick={() => onAnswerByHR('rejected')}
                        styles={{ width: 'fit-content', height: '40px' }}
                        text="Отклонить"
                        view="default_bg_white_purple"
                    />
                    <Button
                        disabled={!answerValue}
                        onClick={() => onAnswerByHR('approved')}
                        styles={{ width: 'fit-content', height: '40px' }}
                        text="Утвердить"
                        view="default_bg"
                    />
                </div>
            </div>
        );
    } else {
        modalContent = (
            <div className={styles.request_modal__content}>
                <div className={styles.request_modal__content_agree}>
                    <h2 className={styles.request_modal__titles}>Ответ на запрос</h2>
                    <div className={styles.request_modal__content_wrapper_img}>
                        <img className={styles.request_modal__content_agree_img} src={redaction} alt="" />
                        <img className={styles.request_modal__content_agree_img} src={Delete} alt="" />
                    </div>
                </div>

                <div className={styles.request_modal__wrapper_text}>
                    <span className={styles.request_modal__wrapper_title}>Менеджер: </span>
                    <span className={styles.request_modal__wrapper_info}>{requestData?.managed_by?.name}</span>
                </div>
                <div className={styles.request_modal__wrapper_text}>
                    <span className={styles.request_modal__wrapper_title}>Статус: </span>
                    <span className={styles.request_modal__wrapper_info}>{requestData?.status}</span>
                </div>
                <div className={styles.request_modal__wrapper_text}>
                    <span className={styles.request_modal__wrapper_title}>Дата: </span>
                    <span className={styles.request_modal__wrapper_info}>{formatDate(requestData?.managed_at)}</span>
                </div>
                <div className={styles.request_modal__wrapper_comment}>
                    <span className={styles.request_modal__wrapper_title}>Комментарий </span>
                    <span className={styles.request_modal__wrapper_info}>{requestData?.answer}</span>
                </div>
            </div>
        );
    }

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
                        <span className={styles.request_modal__wrapper_title}>Автор: </span>
                        <span className={styles.request_modal__wrapper_info}>
                            {requestData?.author?.last_name + ' ' + requestData?.author?.first_name}
                        </span>
                    </div>
                    <div className={styles.request_modal__wrapper_text}>
                        <span className={styles.request_modal__wrapper_title}>Дата: </span>
                        <span className={styles.request_modal__wrapper_info}>
                            {formatDate(requestData?.created_at)}
                        </span>
                    </div>

                    <div className={styles.request_modal__wrapper_comment}>
                        <span className={styles.request_modal__wrapper_title}>Комментарий </span>
                        <span className={styles.request_modal__wrapper_info}>{requestData?.comment}</span>
                    </div>
                </div>
                {modalContent}
            </div>
        </div>
    );
};

