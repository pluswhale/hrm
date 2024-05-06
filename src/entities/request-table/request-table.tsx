import React, { FC, ReactElement } from 'react';
import style from './request-table.module.scss';
import { RequestTableProps } from './types';

const RequestTable: FC<RequestTableProps> = ({ requests }): ReactElement => {
    const displayStatus = (status: string) => {
        let color = '';
        switch (status) {
            case 'Закрыта':
                color = '#8A8A8A';
                break;
            case 'В работе':
                color = '#6362E7';
                break;
            default:
                color = '#6362E7';
        }

        return (
            <span style={{ backgroundColor: color }} className={style.container__status}>
                {status}
            </span>
        );
    };

    return (
        <div className={style.container}>
            {requests.map((request) => (
                <div key={request.id} className={style.container__card}>
                    <div className={style.container__head}>
                        <img className={style.container__img} src={request.imageUrl} alt="" />
                        <div className={style.container__name_prof}>
                            <span className={style.container__name}>{request.name}</span>
                            <span className={style.container__prof}>{request.profession}</span>
                        </div>
                    </div>
                    <span className={style.container__meeting}>{request.meeting}</span>
                    <span className={style.container__data}>{request.data}</span>
                    {displayStatus(request.status)}
                </div>
            ))}
        </div>
    );
};

export default RequestTable;

