import React, { FC, ReactElement, useState } from 'react';
import style from './request-table-employee.module.scss';
import { RequestTableProps } from './types';
import { PopupWithDarkOverlay } from '../../../shared/components/portal/popup-with-dark-overlay';
import { RequestModalViewEmployee } from '../request-modal-view-employee/request-modal-view-employee';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

const RequestTableEmployee: FC<RequestTableProps> = ({
    requests,
    onOpenCreateRequestModal,
    currentRequestObjectForModal,
    setCurrentRequestObjectForModal,
}): ReactElement => {
    const [isModalRecruitingFunnelOpened, setIsModalRecruitingFunnelOpened] = useState(false);

    const formatDate = (date: string) => {
        return dayjs(date).format('D MMMM YYYY HH:mm');
    };

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
            <span style={{ backgroundColor: color, color: 'white' }} className={style.container__status}>
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

    const onOpenModalRequest = (request: any) => {
        setIsModalRecruitingFunnelOpened(true);
        setCurrentRequestObjectForModal(request);
    };

    const onCloseModalRequest = () => {
        setIsModalRecruitingFunnelOpened(false);
    };

    return (
        <div className={style.container}>
            {requests?.map((request, index) => (
                <React.Fragment key={request.id}>
                    <div className={style.container__card} onClick={() => onOpenModalRequest(request)}>
                        <span className={style.container__meeting}>{displayType(request?.type)}</span>
                        <span className={style.container__data}>{formatDate(request.created_at)}</span>
                        {displayStatus(request.status)}
                    </div>
                    {index < requests.length - 1 && <hr className={style.container__divider} />}
                </React.Fragment>
            ))}
            <PopupWithDarkOverlay onClose={onCloseModalRequest} isOpened={isModalRecruitingFunnelOpened}>
                <RequestModalViewEmployee
                    onOpenCreateRequestModal={onOpenCreateRequestModal}
                    onClose={onCloseModalRequest}
                    requestData={currentRequestObjectForModal}
                />
            </PopupWithDarkOverlay>
        </div>
    );
};

export default RequestTableEmployee;

