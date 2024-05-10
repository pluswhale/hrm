import React, { FC, ReactElement, useState } from 'react';
import style from './request-table.module.scss';
import { RequestTableProps } from './types';
import { PopupWithDarkOverlay } from '../../../shared/components/portal/popup-with-dark-overlay';
import { RequestModal } from '../request-modal/request-modal';

const RequestTable: FC<RequestTableProps> = ({ requests }): ReactElement => {
    const [modalStatus, setModalStatus] = useState<string>('');
    const [isModalRecruitingFunnelOpened, setIsModalRecruitingFunnelOpened] = useState(false);

    const displayStatus = (status: string) => {
        let color;
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
            <span style={{ backgroundColor: color, color: 'white' }} className={style.container__status}>
                {status}
            </span>
        );
    };

    const onOpenModalRequest = (status: string) => {
        setIsModalRecruitingFunnelOpened(true);
        setModalStatus(status);
    };

    const onCloseModalRequest = () => {
        setIsModalRecruitingFunnelOpened(false);
    };

    return (
        <div className={style.container}>
            {requests.map((request, index) => (
                <React.Fragment key={request.id}>
                    <div className={style.container__card} onClick={() => onOpenModalRequest(request.status)}>
                        <img className={style.container__img} src={request.imageUrl} alt="" />
                        <div className={style.container__head}>
                            <div className={style.container__name_prof}>
                                <span className={style.container__name}>{request.name}</span>
                                <span className={style.container__prof}>{request.profession}</span>
                            </div>
                        </div>
                        <span className={style.container__meeting}>{request.meeting}</span>
                        <span className={style.container__data}>{request.data}</span>
                        {displayStatus(request.status)}
                    </div>
                    {index < requests.length - 1 && <hr className={style.container__divider} />}
                </React.Fragment>
            ))}
            <PopupWithDarkOverlay onClose={onCloseModalRequest} isOpened={isModalRecruitingFunnelOpened}>
                <RequestModal onClose={onCloseModalRequest} status={modalStatus} />
            </PopupWithDarkOverlay>
        </div>
    );
};

export default RequestTable;

