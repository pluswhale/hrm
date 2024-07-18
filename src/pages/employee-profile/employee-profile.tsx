import { FC, ReactElement } from 'react';

import { EmployeeProfileInfo } from '../../features/employee-profile-info';

import style from './employee-profile.module.scss';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';
import { CommentAndHistoryTemplate } from 'features/comment-and-history-template';
import parseUriParams, { parseUriParamsLine } from 'shared/libs/parseUriParams';
import { useParams } from 'react-router';
import { fetchEmployeeById } from 'shared/api/employees/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';

const EmployeeProfile: FC = (): ReactElement => {
    const params = parseUriParams(window.location.href);
    const { id } = useParams();

    const queryParameters = {
        queryKey: 'fetchEmployeeById',
        queryThunk: fetchEmployeeById,
        queryThunkOptions: {
            id,
        },
    } as QueryParameters<any>;

    const employeeQuery = useFetchData(queryParameters);

    const navigation = [
        {
            title: params?.status === 'current' ? 'Текущие сотрудники' : 'Бывшие сотрудники',
            url: `/employees?status=${params?.status}`,
        },
        {
            title: `${employeeQuery?.data?.last_name} ${employeeQuery?.data?.first_name}`,
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                <div className={style.container__backLink}>
                    <HorizontalNavigation navigation={navigation} />
                </div>
                <div className={style.container__wrap}>
                    <div className={style.container__wrapper_left}>
                        <EmployeeProfileInfo employeeData={employeeQuery?.data} />
                    </div>
                    <div className={style.container__wrapper}>
                        <CommentAndHistoryTemplate />
                    </div>
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default EmployeeProfile;

