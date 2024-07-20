import { FC, ReactElement, useEffect, useState } from 'react';
import closeIcon from '../../../assets/close_icon.svg';
import { RequestModalProps } from './types';
import redaction from '../../../assets/Редактировать.svg';
import Delete from '../../../assets/Удалить.svg';
import styles from './request-modal-create.module.scss';
import { SELECTOR_TYPE_OPTIONS } from './constants';
import { Button } from '../../../shared/components/button/button';
import { Autocomplete, TextField } from '@mui/material';
import { useCreateRequest, useUpdateRequest } from 'shared/api/requests/mutations';
import { CreateRequestBody, UpdateRequestBody } from 'shared/api/requests/types';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';

export const RequestModalCreate: FC<RequestModalProps> = ({ currentRequestObjectForModal, onClose }): ReactElement => {
    const userId = useSelector(userDataSelector)?.id;
    const [commentValue, setCommentValue] = useState<string>('');
    const [typeRequestValue, setTypeRequestValue] = useState<string>('');
    const [mode, setMode] = useState<'create' | 'edit'>('create');
    const addRequestMutation = useCreateRequest();
    const updateRequestMutation = useUpdateRequest();

    useEffect(() => {
        if (currentRequestObjectForModal) {
            setCommentValue(currentRequestObjectForModal?.comment);
            setTypeRequestValue(currentRequestObjectForModal?.type);
            if (currentRequestObjectForModal?.id) {
                setMode('edit');
            }
        }
    }, [currentRequestObjectForModal]);

    const onAddNewRequest = () => {
        const body = {
            authorId: userId,
            type: typeRequestValue,
            comment: commentValue,
        } as CreateRequestBody;

        addRequestMutation.mutate(body);

        onClose();
    };

    const onUpdateRequest = () => {
        const body = {
            requestId: currentRequestObjectForModal?.id,
            type: typeRequestValue,
            comment: commentValue,
        } as UpdateRequestBody;

        updateRequestMutation.mutate(body);

        onClose();
    };

    return (
        <div className={styles.request_modal}>
            <div className={styles.request_modal__container}>
                <div className={styles.request_modal__title_and_close}>
                    <span className={styles.request_modal__title}>Создание запроса</span>
                    <img onClick={onClose} className={styles.request_modal__close} src={closeIcon} alt="close icon" />
                </div>
                <div className={styles.request_modal__content}>
                    <h2 className={styles.request_modal__titles}>Тема запроса</h2>
                    <Autocomplete
                        value={SELECTOR_TYPE_OPTIONS.find((option) => option.value === typeRequestValue) || null}
                        onChange={(event, newValue) => {
                            setTypeRequestValue(newValue ? newValue.value : '');
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={SELECTOR_TYPE_OPTIONS}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Тип запроса" />}
                    />
                    <div className={styles.request_modal__wrapper_comment}>
                        <span className={styles.request_modal__wrapper_title}>Комментарий </span>
                        <textarea
                            value={commentValue}
                            onChange={({ target }) => setCommentValue(target.value)}
                            placeholder="Комментарий..."
                            className={styles.request_modal__textarea}
                        />
                    </div>
                    <Button
                        onClick={mode === 'create' ? onAddNewRequest : onUpdateRequest}
                        type="button"
                        view="default_bg"
                        styles={{ width: 'fit-content', alignSelf: 'flex-end' }}
                        text={mode === 'create' ? 'Отправить' : 'Отредактировать'}
                    />
                </div>
            </div>
        </div>
    );
};

