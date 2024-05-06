import { Badge, Card, CardBody, CardTitle, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import style from "./person-card-item.module.scss";
import { FC, ReactElement } from "react";
import { PersonCardProps } from "./types";

export const PersonCard: FC<PersonCardProps> = ({ imageSrc, navigationUrl, name, role, skills }): ReactElement => {
    return (
        <Col style={{ minWidth: '300px', maxWidth: '300px' }} >
            <Link to={navigationUrl} className={"text-decoration-none"}>
                <div className={style.cardImage__person_card_wrapper}>
                    <img
                        src={imageSrc}
                        height={83}
                        width={83}
                        alt='profile'
                        className={style.cardImage__img}
                    />
                </div>
                <Card bg={"light"}>
                    <CardBody className={style.cardImage__card}>
                        <CardTitle>{name}</CardTitle>
                        <CardTitle className={"text-muted"}>{role}</CardTitle>
                        <hr />
                        {skills
                            .map((value, index) => <Badge key={`skill-${index}-${value}`} className={"mx-1"} bg={"dark"}>{value}</Badge>)}
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}
