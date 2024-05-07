import React, { FC, ReactElement } from 'react';
import closeIcon from '../../../assets/close_icon.svg';
import { RequestModalProps } from './types';
import redaction from '../../../assets/Редактировать.svg'
import Delete from '../../../assets/Удалить.svg'
import styles from './request-modal.module.scss';
import { request_modal, request_modal_answear } from './constants';
import { Button } from '../../../shared/components/button/button';

export const RequestModal: FC<RequestModalProps> = ({ onClose , status }): ReactElement => {
    const displayStatus = (status: string) => {
        let color = '';
        switch (status) {
            case 'Новый':
                color = '#6362E7';
                break;
            case 'Утвержден':
                color = '#81C314';
                break;
            case 'Отклонен':
                color = '#DD5555';
                break;
            default:
                color = '#E7D10D';
        }

        return (
            <span style={{ backgroundColor: color , color: 'white' }} className={styles.request_modal__status}>
                {status}
            </span>
        );
    };

    let modalContent;
    if (status === 'Новый' || status === 'default') {
        modalContent = (
            <div className={styles.request_modal__content}>
                <h2 className={styles.request_modal__titles}>
                    Ответ на запрос
                </h2>
                <textarea placeholder="Комментарий..." className={styles.request_modal__textarea} />
                <div className={styles.request_modal__wrappper_card}>
                    <Button
                        styles={{ width: 'fit-content', height: '40px' }}
                        text="Отклонить"
                        type="default_bg_white_purple"
                    />
                    <Button
                        styles={{ width: 'fit-content', height: '40px' }}
                        text="Утвердить"
                        type="default_bg"
                    />
                </div>
            </div>

        );
    } else {
        modalContent = (
            <div className={styles.request_modal__content}>
                <div className={styles.request_modal__content_agree}>
                    <h2 className={styles.request_modal__titles}>
                        Ответ на запрос
                    </h2>
                    <div className={styles.request_modal__content_wrapper_img}>
                        <img className={styles.request_modal__content_agree_img} src={redaction} alt="" />
                        <img className={styles.request_modal__content_agree_img} src={Delete} alt="" />
                    </div>
                </div>
                {request_modal_answear.map((item, index) => (
                    <div key={index} className={styles.request_modal__wrapper_text}>
                        <span className={styles.request_modal__wrapper_title}>{item.title}</span>
                        <span className={styles.request_modal__wrapper_info}>{item.info}</span>
                    </div>
                ))}
                <div className={styles.request_modal__wrapper_comment}>
                    <span className={styles.request_modal__wrapper_title}>Комментарий </span>
                    <span className={styles.request_modal__wrapper_info}>Прошу то и то, туда сюда. Всякая пояснительная информацию по запросу от автора запроса.</span>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.request_modal}>
            <div className={styles.request_modal__container}>
                <div className={styles.request_modal__title_and_close}>
                    <span className={styles.request_modal__title}>
                        Встреча с руководством
                        {displayStatus(status)}
                    </span>
                    <img
                        onClick={onClose}
                        className={styles.request_modal__close}
                        src={closeIcon}
                        alt="close icon"
                    />
                </div>
                <div className={styles.request_modal__content}>
                    <h2 className={styles.request_modal__titles}>
                        Информация о запросе
                    </h2>
                    {request_modal.map((item, index) => (
                        <div key={index} className={styles.request_modal__wrapper_text}>
                            <span className={styles.request_modal__wrapper_title}>{item.title}</span>
                            <span className={styles.request_modal__wrapper_info}>{item.info}</span>
                        </div>
                    ))}
                    <div className={styles.request_modal__wrapper_comment}>
                        <span className={styles.request_modal__wrapper_title}>Комментарий </span>
                        <span className={styles.request_modal__wrapper_info}>Прошу то и то, туда сюда. Всякая пояснительная информацию по запросу от автора запроса.</span>
                    </div>
                </div>
                {modalContent}
                </div>
            </div>
            );
            };

