import { FC, ReactElement } from 'react';
import { EmployeeProfileInfo } from '../../features/employee-profile-info';
import { CommentAndHistoryTemplate } from '../../features/comment-and-history-template';

import style from './employee-profile.module.scss';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';

const EmployeeProfile: FC = (): ReactElement => {
    const navigation = [
        {
            title: 'Текущие сотрудники',
            url: '/employees',
        },
        {
            title: 'Рыбина Анастасия',
            url: '',
        },
    ];

    return (
        <div className={style.container}>
            <div className={style.container__backLink}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <div className={style.container__wrap}>
                <div className={style.container__wrapper_left}>
                    <EmployeeProfileInfo />
                </div>
                <div className={style.container__wrapper}>
                    <CommentAndHistoryTemplate />
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;

