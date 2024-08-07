import React, { FC, ReactElement, useState } from 'react';
import style from './request-table.module.scss';
import { RequestTableProps } from './types';
import { PopupWithDarkOverlay } from '../../../shared/components/portal/popup-with-dark-overlay';
import { RequestModal } from '../request-modal/request-modal';
import fakeAvatar from '../../../assets/Ellipse 1.svg';
import { Request } from 'shared/types/request.type';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { formatDate } from 'shared/libs/dateFormater';
dayjs.locale('ru');

const RequestTable: FC<RequestTableProps> = ({
    requests,
    onOpenCreateRequestModal,
    currentRequestObjectForModal,
    setCurrentRequestObjectForModal,
}): ReactElement => {
    const [isModalRecruitingFunnelOpened, setIsModalRecruitingFunnelOpened] = useState(false);

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
            <span style={{ backgroundColor: color, color: '#fff' }} className={style.container__status}>
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

    const onOpenModalRequest = (request: Request) => {
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
                        <img className={style.container__img} src={fakeAvatar} alt="" />
                        <div className={style.container__head}>
                            <div className={style.container__name_prof}>
                                <span className={style.container__name}>
                                    {request?.author?.last_name + ' ' + request?.author?.first_name + ' '}
                                </span>
                                <span className={style.container__prof}>{request?.author?.sub_position?.title}</span>
                            </div>
                        </div>
                        <span className={style.container__meeting}>{displayType(request?.type)}</span>
                        <span className={style.container__data}>{formatDate(request.created_at)}</span>
                        {displayStatus(request.status)}
                    </div>
                    {index < requests.length - 1 && <hr className={style.container__divider} />}
                </React.Fragment>
            ))}
            <PopupWithDarkOverlay onClose={onCloseModalRequest} isOpened={isModalRecruitingFunnelOpened}>
                <RequestModal
                    onClose={onCloseModalRequest}
                    requestData={currentRequestObjectForModal}
                    setCurrentRequestObjectForModal={setCurrentRequestObjectForModal}
                />
            </PopupWithDarkOverlay>
        </div>
    );
};

export default RequestTable;

