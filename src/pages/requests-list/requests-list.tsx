import React from 'react';
import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';
import style from './requests.module.scss';
import { Filter } from '../../features/filter';
import logo from '../../assets/Ellipse 1.svg';
import RequestTable from '../../entities/request-items/request-table/request-table';

const RequestsList = () => {
    const requests = [
        {
            id: 1,
            name: 'John Doe',
            profession: 'Software Engineer',
            status: 'Новый',
            meeting: 'Встреча с руководством',
            data: 'Data 1',
            imageUrl: logo,
        },
        {
            id: 2,
            name: 'Jane Smith',
            profession: 'UI/UX Designer',
            status: 'Утвержден',
            meeting: 'Отпуск',
            data: 'Data 2',
            imageUrl: logo,
        },
    ];
    return (
        <DefaultContentWrapper>
            <h2 className={style.container__title}>Запросы</h2>
            <div className={style.container}>
                <RequestTable requests={requests} />
                <Filter title="Найти запрос" />
            </div>
        </DefaultContentWrapper>
    );
};

export default RequestsList;
