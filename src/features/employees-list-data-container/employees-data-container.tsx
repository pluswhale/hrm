import {Col, Row} from "react-bootstrap";
import { PersonCard } from "../../entities/person-card-item";
import { FC, ReactElement } from "react";
import { EmployeesDataContainerProps } from "./types";

import style from "../../pages/employee-list/employees-list.module.scss";

export const EmployeesDataContainer: FC<EmployeesDataContainerProps> = ({employees}): ReactElement => {
    return (
        <Col className={style.container__card} sm={12} md={8}>
            <Row className={`${style.container__mobile} g-3 gx-2 gy-3`} xs={1} md={2} lg={3}>
                {employees?.length
                    ? employees?.map((employee) =>
                        <PersonCard
                            key={employee?.id}
                            navigationUrl={`/employees/${employee.id}`}
                            imageSrc={employee?.imageSrc}
                            name={employee?.name}
                            role={employee?.role}
                            skills={employee?.skills}
                        />
                    )
                    : <p>Нет сотрудников</p>
                }
            </Row>

        </Col>
    );
};
