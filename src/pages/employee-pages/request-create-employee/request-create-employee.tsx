import { Autocomplete, TextField } from '@mui/material';
import styles from './request-create-employee.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import { useCreateRequest, useUpdateRequest } from 'shared/api/requests/mutations';
import { CreateRequestBody, UpdateRequestBody } from 'shared/api/requests/types';
import { Button } from 'shared/components/button/button';
import { SELECTOR_TYPE_OPTIONS } from './constants';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRequestById } from 'shared/api/requests/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { Request } from 'shared/types/request.type';
import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';

export const RequestCreateEmployee = () => {
    const userId = useSelector(userDataSelector)?.id;
    const [commentValue, setCommentValue] = useState<string>('');
    const [typeRequestValue, setTypeRequestValue] = useState<string>('');
    const [mode, setMode] = useState<'create' | 'edit'>('create');
    const navigate = useNavigate();
    const addRequestMutation = useCreateRequest();
    const updateRequestMutation = useUpdateRequest();
    const { id: requestId } = useParams();

    const queryParameters = {
        queryKey: 'fetchRequestById',
        queryThunk: fetchRequestById,
        queryThunkOptions: {
            id: requestId,
        },
    } as QueryParameters<Request>;

    const requestByIdQuery = useFetchData(queryParameters);

    useEffect(() => {
        if (requestByIdQuery?.data) {
            setCommentValue(requestByIdQuery?.data?.comment);
            setTypeRequestValue(requestByIdQuery?.data?.type);
            if (requestId) {
                setMode('edit');
            }
        }
    }, [requestByIdQuery?.data]);

    const onAddNewRequest = () => {
        const body = {
            authorId: userId,
            type: typeRequestValue,
            comment: commentValue,
        } as CreateRequestBody;

        addRequestMutation.mutate(body);
        navigate('/request/employee');
    };

    const onUpdateRequest = () => {
        const body = {
            requestId: Number(requestId),
            type: typeRequestValue,
            comment: commentValue,
        } as UpdateRequestBody;

        updateRequestMutation.mutate(body);
        navigate('/request/employee');
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

    const navigation = [
        {
            title: 'Запросы',

            url: `/request/employee`,
        },
        {
            title:
                requestId !== 'undefined' || requestId !== undefined
                    ? displayType(requestByIdQuery?.data?.type || '')
                    : 'Создание',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <HorizontalNavigation navigation={navigation} />
            <div className={styles.request_modal__wrapper}>
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
        </DefaultContentWrapper>
    );
};

