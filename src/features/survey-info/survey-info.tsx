import React from 'react';
import style from './survey-info.module.scss';
import { Props } from './types';
import { formatDate } from 'shared/libs/dateFormater';

const SurveyInfo: React.FC<Props> = ({ surveyData }) => {
    const leftColumnData = [
        { id: 1, title: 'Создан', value: formatDate(surveyData?.createdAt) },
        { id: 2, title: 'Дата начала', value: formatDate(surveyData?.deadlineFrom) },
        { id: 3, title: 'Дата завершения', value: formatDate(surveyData?.deadlineTo) },
    ];

    const rightColumnData = [
        { id: 4, title: 'Прошедшие опрос', value: `${surveyData?.takenCount} из ${surveyData?.participantsCount}` },
        { id: 5, title: 'Тип опроса', value: surveyData?.type === 'personal' ? 'персональный' : 'общий' },
        { id: 6, title: 'Анонинмный', value: surveyData?.anonymous ? 'да' : 'нет' },
    ];
    return (
        <div className={style.container__card}>
            <h2 className={style.container__title}>Об опросе</h2>
            <div className={style.container__card_info_wrapp}>
                <div className={style.container__card_block}>
                    {leftColumnData.map((data, index) => (
                        <div key={index} className={style.container__created_and_deadline}>
                            <div className={style.container__row}>
                                <span className={style.container__row_label}>{data.title}:</span>
                                <span className={style.container__row_value}>{data.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.container__card_block}>
                    {rightColumnData.map((data, index) => (
                        <div key={index} className={style.container__created_and_deadline}>
                            <div className={style.container__row}>
                                <span className={style.container__row_label}>{data.title}:</span>
                                <span className={style.container__row_value}>{data.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SurveyInfo;

