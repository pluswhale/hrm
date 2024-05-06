import {Badge, Col, Row} from "react-bootstrap";
import React, {CSSProperties} from "react";
import stylemodule from './application-item.module.css'
import {ApplicationStatus} from "./models";


interface ApplicationItemProps {
    href : string | undefined;
    applicationId : number | undefined
    status : ApplicationStatus | undefined;
    className : string | undefined;
    title : string;
    body : string;
    style: CSSProperties | undefined;
    date : string;
}



export const ApplicationItem = ({ status, href = "#", className = "", style=undefined, title, body, date, applicationId = 0} : ApplicationItemProps) => {

    return(
        <>
            <Row className={`my-3 ${className}`}>
                <Col>
                    <Row className={"text-start"}>
                        <div className={"mx-0"}>
                            <a className={"fw-bold me-2"} href={href}>#{applicationId}</a>
                            <span className={"text-muted"}>{date}</span>
                            <Badge className={"mx-1"} bg={status === ApplicationStatus.active ? "primary" : status === ApplicationStatus.declaimed ? "danger" : status === ApplicationStatus.ready ? "success" : "secondary"}>
                                {status === ApplicationStatus.active ? "В работе" : status === ApplicationStatus.declaimed ? "Отклонена" : status === ApplicationStatus.ready ? "Готово" : "Не опознан"}
                            </Badge>
                        </div>
                    </Row>
                    <Row className={"text-start"}>
                        <div className={"mx-0"}>
                            <h6>{title}</h6>
                        </div>
                    </Row>
                    <Row className={"text-start"}>
                        <div className={`${stylemodule.limitedText}`}>
                            {body}
                        </div>
                    </Row>
                </Col>
            </Row>
        </>
    )
};

