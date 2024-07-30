import { FC, ReactElement } from 'react';

import mockAvatar from '../../../assets/Ellipse 1.svg';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './create-survey-employees-list.module.scss';

type Props = {
    employees: any[];
    onDeleteEmployee: (employeeId: number) => void;
};

export const CreateSurveyEmployeesList: FC<Props> = ({ employees, onDeleteEmployee }): ReactElement => {
    const getFullName = (employee: any) => {
        return `${employee?.last_name} ${' '} ${employee?.first_name} ${' '} ${employee?.sur_name || ''}`;
    };
    return (
        <div className={styles.employee_list__wrapper}>
            {employees?.length && (
                <>
                    {employees?.map((employee) => {
                        return (
                            <div key={employee?.id} className={styles.employee_list__employee}>
                                <div className={styles.employee_list__employee__avatar_and_name}>
                                    <img
                                        src={mockAvatar}
                                        className={styles.employee_list__employee__avatar}
                                        alt="avatar"
                                    />
                                    <div className={styles.employee_list__employee__info}>
                                        <span className={styles.employee_list__employee__info_name}>
                                            {getFullName(employee)}
                                        </span>
                                        <span className={styles.employee_list__employee__info_position}>
                                            {employee?.sub_position?.title}
                                        </span>
                                    </div>
                                </div>
                                <DeleteIcon onClick={() => onDeleteEmployee(employee?.id)} />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

