import { FC, ReactElement, useEffect, useState } from 'react';
import redaction from '../../../assets/Редактировать.svg';
import Delete from '../../../assets/Удалить.svg';
import styles from './send-answer-request.module.scss';
import { Button } from 'shared/components/button/button';
import { Request } from 'shared/types/request.type';
import { formatDate } from 'shared/libs/dateFormater';
import { useMakeSeenRequest, useUpdateRequestByHRManager } from 'shared/api/requests/mutations';
import { UpdateRequestByHRManagerBody } from 'shared/api/requests/types';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import { useLocation } from 'react-router';

type Props = {
    requestData: Request;
};

export const SendAnswerToRequest: FC<Props> = ({ requestData }): ReactElement => {
    const userId = useSelector(userDataSelector)?.id;
    const location = useLocation();
    const makeSeenMutation = useMakeSeenRequest();
    const updateRequestByHRManagerMutation = useUpdateRequestByHRManager();
    const [answerValue, setAnswerValue] = useState<string>('');

    useEffect(() => {
        return () => {
            if (requestData?.status === 'new' && !location.pathname.includes('employee')) {
                makeSeenMutation.mutate(requestData?.id);
            }
        };
    }, [requestData?.id, requestData?.status]);

    const onAnswerByHR = (decision: string) => {
        const body = {
            requestId: requestData?.id,
            answer: answerValue,
            decision,
            manageById: userId,
        } as UpdateRequestByHRManagerBody;

        updateRequestByHRManagerMutation.mutate(body);
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

    return <>{modalContent}</>;
};

