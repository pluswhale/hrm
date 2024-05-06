import { FC } from "react";
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Form,
    FormControl,
    FormGroup,
    InputGroup,
    Row
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { FilterProps } from "./types";

export const Filter: FC<FilterProps> = ({ title, filterSet, onClickSearch }) => {
    return (
        <Col style={{ maxWidth: '360px', minWidth: '360px' }}>
            <Card>
                <CardBody>
                    <CardTitle style={{ fontSize: '16px' , display: 'flex' , justifyContent: 'left'}}>{title}</CardTitle>
                    <hr />

                    <Form>
                        <FormGroup className={"text-start my-2"}>
                            <InputGroup>
                                <FormControl type={"text"} placeholder={"Поиск"} />
                                <Button variant={"outline-secondary"}>
                                    <Search />
                                </Button>
                            </InputGroup>
                        </FormGroup>
                        {filterSet
                            ? filterSet.map((set) => (
                            <FormGroup className={"text-start my-3"} key={set.id}>
                                <h5>{set.title}</h5>
                                {set.checkboxes.map((checkbox) => (
                                    <Row className={"justify-content-between my-1"} key={checkbox.label}>
                                        <Col xs={10}>
                                            <div>{checkbox.label}</div>
                                        </Col>
                                        <Col>
                                            <Row xs={2}>
                                                <Badge>15</Badge>
                                                {checkbox?.checked && <Form.Check />}
                                            </Row>
                                        </Col>
                                    </Row>
                                ))}
                            </FormGroup>
                            ))
                            : null
                        }
                    </Form>

                </CardBody>
            </Card>
        </Col>
    );
};
