import {Card, CardBody, CardText, CardTitle, Row} from "react-bootstrap";
import {ReactElement} from "react";

type HistoryItemProps = {
    icon: ReactElement,
    title : string,
    value : string,
    userName: string,
    isFirst : boolean,
    isLast : boolean

}

export const HistoryItem = ({icon, title, value, userName, isFirst = false, isLast = false} : HistoryItemProps) => {
    return(
        <Row>
            <div className="col-auto text-center flex-column d-none d-lg-flex">
                <Row className="h-50">
                    <div className={`col ${isFirst ? "" : "border-end"}`}>&nbsp;</div>
                    <div className="col">&nbsp;</div>
                </Row>
                <h5 className="m-2">
                    {icon}
                </h5>
                <div className="row h-50">
                    <div className={`col ${isLast ? "" : "border-end"}`}>&nbsp;</div>
                    <div className="col">&nbsp;</div>
                </div>
            </div>
            <div className="col py-2">
                <Card>
                    <CardBody>
                        <CardTitle className={""}><h4>{title}</h4></CardTitle>
                        <CardText>{value}</CardText>
                    </CardBody>
                </Card>
            </div>
        </Row>
    )
}