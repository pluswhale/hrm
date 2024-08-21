import React, { FC, ReactElement, useState } from 'react';
import style from './request-table-employee.module.scss';
import { RequestTableProps } from './types';
import { PopupWithDarkOverlay } from '../../../shared/components/portal/popup-with-dark-overlay';
import { RequestModalViewEmployee } from '../request-modal-view-employee/request-modal-view-employee';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useMediaQuery } from 'react-responsive';
import { RequestCard } from '../request-card/request-card';
import { RequestCardMobile } from '../request-card-mobile/request-card-mobile';
dayjs.locale('ru');

const RequestTableEmployee: FC<RequestTableProps> = ({
    requests,
    onOpenCreateRequestModal,
    currentRequestObjectForModal,
    setCurrentRequestObjectForModal,
}): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const [isModalRecruitingFunnelOpened, setIsModalRecruitingFunnelOpened] = useState(false);

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

