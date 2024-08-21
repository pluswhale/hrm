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
import { useMediaQuery } from 'react-responsive';
import { RequestCardMobile } from '../request-card-mobile/request-card-mobile';
import { RequestCard } from '../request-card/request-card';
dayjs.locale('ru');

const RequestTable: FC<RequestTableProps> = ({
    requests,
    onOpenCreateRequestModal,
    currentRequestObjectForModal,
    setCurrentRequestObjectForModal,
}): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width:768px)' });
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
                <>
                    {isMobile ? (
                        <RequestCardMobile request={request} />
                    ) : (
                        <RequestCard
                            key={request.id}
                            request={request}
                            index={index}
                            requestLength={requests?.length}
                            setIsModalRecruitingFunnelOpened={setIsModalRecruitingFunnelOpened}
                            setCurrentRequestObjectForModal={setCurrentRequestObjectForModal}
                        />
                    )}
                </>
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

