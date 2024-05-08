import React from 'react';
import style from './surveys-result.module.scss';

const SurveysResult = ({ surveysResults }) => {
    const lineWidth = surveysResults.percent + '%';

    return (
        <div className={style.container}>
            <div className={style.container__wrapper}>
                <span className={style.container__input_text}>
                    Вопрос с одним вариантом ответа
                    {surveysResults.map((result, index) => (
                        <div className={style.container__wrapper_radio}>
                            <div className={style.container__wrapper_line}>
                                <div className={style.container__wrapper_left}>
                                    <span className={style.container__text}>{surveysResults.id}</span>
                                    <span className={style.container__text}>{surveysResults.percent}%</span>
                                </div>
                                <div className={style.container__wrapper_left}>
                                    <span className={style.container__text_name}>{surveysResults.name}</span>
                                    <div className={style.container__line} style={{ width: lineWidth }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </span>
            </div>
        </div>
    );
};

export default SurveysResult;

