import { Col, Row } from 'react-bootstrap';
import { PersonCard } from '../../entities/person-card-item';
import { FC, ReactElement } from 'react';
import { EmployeesDataContainerProps } from './types';

import styles from './employees-data-container.module.scss';

export const EmployeesDataContainer: FC<EmployeesDataContainerProps> = ({ employees }): ReactElement => {
    return (
        <div className={styles.employees_container}>
            {employees?.length ? (
                employees?.map((employee) => (
                    <PersonCard
                        key={employee?.id}
                        navigationUrl={`/employees/${employee.id}`}
                        imageSrc={employee?.imageSrc}
                        name={employee?.name}
                        role={employee?.role}
                        skills={employee?.skills}
                    />
                ))
            ) : (
                <p>Нет сотрудников</p>
            )}
        </div>
    );
};

