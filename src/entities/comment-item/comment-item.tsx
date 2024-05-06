import { Col, Image, Row } from "react-bootstrap";
import style from './comment_item.module.scss';
import Delete from './../../assets/Удалить.svg';
import Redact from './../../assets/Редактировать.svg';

export const CommentItem = ({ comment }) => {
    const { author, date, text } = comment;

    return (
        <Row className={style.container} key={author}>
            <div className={style.container__wrapper}>
                <Col sm={1}>
                    <Image
                        roundedCircle
                        height={52}
                        width={52}
                        src={"https://images.hdqwalls.com/download/spaceman-4k-h0-3840x2400.jpg"}
                        className={`border border-light`}
                        style={{ objectFit: 'cover' }}
                    />
                </Col>
                <Row className={style.container__card_title}>
                    <div className={"mx-0"}>
                        <span className={style.container__title}>
                            {author}
                            <div className={style.container__img}>
                                <img src={Redact} alt='Redact' />
                                <img src={Delete} alt='Delete' />
                            </div>
                        </span>
                        <span className={style.container__data}>
                            написала комментарий
                                 <span className={style.container__data}>
                                {date}
                            </span>
                        </span>
                    </div>
                </Row>
            </div>
            <Col>
                <Row className={"text-start"}>
                    <span className={style.container__text}>
                        {text}
                    </span>
                </Row>
            </Col>
        </Row>
    );
}

