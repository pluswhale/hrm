import React from 'react';
import style from './survey-info.module.scss';
import { Props } from './types';

const SurveyInfo: React.FC<Props> = ({ leftColumnData, rightColumnData }) => {
    return (

            <div className={style.container__card}>
                <h2 className={style.container__title}>Об опросе</h2>
                <div className={style.container__card_info_wrapp}>
                    <div className={style.container__card_block}>
                    {leftColumnData.map((data, index) => (
                        <div key={index} className={style.container__created_and_deadline}>
                            <div className={style.container__row}>
                                <span className={style.container__row_label}>
                                    {data.title}
                                </span>
                                <span className={style.container__row_value}>
                                    {data.createdAt}
                                </span>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className={style.container__card_block}>
                    {rightColumnData.map((data, index) => (
                        <div key={index} className={style.container__created_and_deadline}>
                            <div className={style.container__row}>
                                <span className={style.container__row_label}>
                                    {data.title}
                                </span>
                                <span className={style.container__row_value}>
                                    {data.createdAt}
                                </span>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
    );
};

export default SurveyInfo;
