import { FC, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import SwitchTab from "../../shared/components/switch-tab/switch-tab";
import { EmployeeProfileInfo } from "../../features/employee-profile-info";
import { EmployeeProfileCommentHistory } from "../../features/employee-profile-comment-history";
import { ArrowLeft } from "react-bootstrap-icons";

import style from "./employee-profile.module.scss";
import { HorizontalNavigation } from "shared/components/horizontal-navigation";
import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';


const EmployeeProfile: FC = (): ReactElement => {

    const navigation = [
        {
            title: 'Текущие сотрудники',
            url: '/employees',
        },
        {
            title: 'Рыбина Анастасия',
            url: '',
        }
    ];

    return (
        <DefaultContentWrapper>
        <div className={style.container}>
            <div className={style.container__backLink}>
                <HorizontalNavigation navigation={navigation}/>
            </div>
            <div className={style.container__wrap}>
                <div className={style.container__wrapper_left}>
                    <EmployeeProfileInfo/>
                </div>
                <div className={style.container__wrapper}>
                    <EmployeeProfileCommentHistory/>
                </div>
            </div>

        </div>
            </DefaultContentWrapper>
    );
};

export default EmployeeProfile;
