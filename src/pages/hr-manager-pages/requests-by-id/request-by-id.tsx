import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import style from './request-by-id.module.scss';

import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchRequestById } from 'shared/api/requests/thunks';
import { Request } from 'shared/types/request.type';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { useParams } from 'react-router';
import { RequestBody } from 'entities/request-items/request-body/request-body';
import { SendAnswerToRequest } from 'entities/request-items/send-answer-request/send-answer-request';

const RequestById = () => {
    const { id: requestId } = useParams();

    const queryParameters = {
        queryKey: 'fetchRequestById',
        queryThunk: fetchRequestById,
        queryThunkOptions: {
            id: requestId,
        },
    } as QueryParameters<Request>;

    const requestByIdQuery = useFetchData(queryParameters);

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

            url: `/request`,
        },
        {
            title: displayType(requestByIdQuery?.data?.type || ''),
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                <HorizontalNavigation navigation={navigation} />
                {requestByIdQuery?.data && <RequestBody requestData={requestByIdQuery?.data} />}
                {requestByIdQuery?.data && <SendAnswerToRequest requestData={requestByIdQuery?.data} />}
            </div>
        </DefaultContentWrapper>
    );
};

export default RequestById;

