import { Col, Image, Row } from 'react-bootstrap';
import style from './comment_item.module.scss';
import Delete from './../../assets/Удалить.svg';
import Redact from './../../assets/Редактировать.svg';
import avatar from '../../assets/Ellipse 1.svg';

export const CommentItem = ({ comment }: any) => {
    const { author, date, text } = comment;

    return (
        <Row className={style.container} key={author}>
            <div className={style.container__wrapper}>
                <Col sm={1}>
                    <img
                        src={avatar}
                        style={{ objectFit: 'cover', borderRadius: '100%', height: '50px', width: '60px' }}
                        alt="avatar"
                    />
                </Col>
                <Row className={style.container__card_title}>
                    <div className={'mx-0'}>
                        <span className={style.container__title}>
                            {author}
                            <div className={style.container__img}>
                                <img src={Redact} alt="Redact" />
                                <img src={Delete} alt="Delete" />
                            </div>
                        </span>
                        <span className={style.container__data}>
                            написала комментарий
                            <span className={style.container__data}>{date}</span>
                        </span>
                    </div>
                </Row>
            </div>
            <Col>
                <Row className={'text-start'}>
                    <span className={style.container__text}>{text}</span>
                </Row>
            </Col>
        </Row>
    );
};

