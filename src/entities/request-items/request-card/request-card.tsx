import React from 'react';
import { FC, ReactElement } from 'react';
import fakeAvatar from '../../../assets/Ellipse 1.svg';
import { Request } from 'shared/types/request.type';
import { formatDate } from 'shared/libs/dateFormater';
import style from './request-card.module.scss';

type Props = {
    request: Request;
    index: number;
    requestLength: number;
    setIsModalRecruitingFunnelOpened: (bool: boolean) => void;
    setCurrentRequestObjectForModal: (request: Request) => void;
};

export const RequestCard: FC<Props> = ({
    request,
    index,
    requestLength,
    setCurrentRequestObjectForModal,
    setIsModalRecruitingFunnelOpened,
}): ReactElement => {
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

    return (
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
            {index < requestLength - 1 && <hr className={style.container__divider} />}
        </React.Fragment>
    );
};

