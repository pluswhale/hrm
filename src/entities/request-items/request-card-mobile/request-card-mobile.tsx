import { FC, ReactElement } from 'react';

import { Request } from 'shared/types/request.type';
import fakeAvatar from '../../../assets/Ellipse 1.svg';
import style from './request-card-mobile.module.scss';
import { useNavigate } from 'react-router';

type Props = {
    request: Request;
};

export const RequestCardMobile: FC<Props> = ({ request }): ReactElement => {
    const navigate = useNavigate();

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

    const onNavigateToMobileRequest = () => {
        navigate(`/request/${request.id}`);
    };

    return (
        <div className={style.container__card} onClick={() => onNavigateToMobileRequest()}>
            <div className={style.container__head}>
                <div className={style.container__name_prof}>
                    <span className={style.container__name}>
                        {request?.author?.last_name + ' ' + request?.author?.first_name + ' '}
                    </span>
                    <span className={style.container__meeting}>{displayType(request?.type)}</span>
                </div>
            </div>
            {displayStatus(request.status)}
        </div>
    );
};

