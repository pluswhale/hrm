import React from 'react';
import style from './surveys-result.module.scss';
import logo from '../../assets/Ellipse 1.svg';
import { Props } from './types';

const SurveysResult: React.FC<Props> = ({ surveysResults }) => {
    return (
        <div className={style.container}>
            <div className={style.container__wrapper}>
                <span className={style.container__input_text}>
                    Вопрос с одним вариантом ответа
                    {surveysResults.map((result, index) => (
                        <div className={style.container__wrapper_radio} key={index}>
                            <div className={style.container__wrapper_line}>
                                <div className={style.container__wrapper_left}>
                                    <span className={style.container__text}>{result.id}</span>
                                    <span className={style.container__text}>{result.percent}%</span>
                                </div>
                                <div className={style.container__wrapper_right}>
                                    <span className={style.container__text_name}>{result.name}</span>
                                    {/* Assuming result is a SurveyResult object */}
                                    <div
                                        className={style.container__line}
                                        style={{ width: result.percent + '%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </span>
            </div>
            <div className={style.container__wrapper}>
                <span className={style.container__input_text}>
                    Вопрос с одним вариантом ответа
                    <span className={style.container__input_textmini}>4 ответа</span>
                    {surveysResults.map((result, index) => (
                        <div className={style.container__card} key={index}>
                            <div className={style.container__card_head}>
                                <img src={logo} alt="logo" className={style.container__img} />
                                <div className={style.container__wrapper_card_title}>
                                    <h2 className={style.container__title}>Alesy Nickolayevna Dmitriyevna</h2>
                                    <span className={style.container__name}>UX/UI Designer</span>
                                </div>
                            </div>
                            <span className={style.container__input_text_req}>Ответ 1</span>
                        </div>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default SurveysResult;

