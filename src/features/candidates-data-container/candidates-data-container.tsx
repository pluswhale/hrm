import {Col, Row} from "react-bootstrap";
import { PersonCard } from "../../entities/person-card-item";
import { FC, ReactElement } from "react";
import { CandidatesDataContainerProps } from "./types";

import style from "../../pages/candidates-list/candidates-list.module.scss";

export const CandidatesDataContainer: FC<CandidatesDataContainerProps> = ({candidates}): ReactElement => {
    return (
        <Col className={style.container__card} sm={12} md={8}>
            <Row className={`${style.container__mobile} g-3 gx-2 gy-3`} xs={1} md={2} lg={3}>
                {candidates?.length
                    ? candidates?.map((candidate) =>
                        <PersonCard
                            key={candidate?.id}
                            navigationUrl={`/candidates/${candidate.id}`}
                            imageSrc={candidate?.imageSrc}
                            name={candidate?.name}
                            role={candidate?.role}
                            skills={candidate?.skills}
                        />
                    )
                    : <p>Нет кандидатов</p>
                }

            </Row>
        </Col>
    );
};
