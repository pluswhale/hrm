import React, { FC } from 'react';
import style from './surveys-result.module.scss';
import logo from '../../assets/Ellipse 1.svg';
import { Props } from './types';

const SurveysResult: FC<Props> = ({ questions }) => {
    return (
        <div className={style.container}>
            {questions &&
                questions.map((question, questionIndex) => {
                    const optionCounts: any = {};

                    question.answers.forEach((answer: any) => {
                        const selectedOptionId = answer.selectedOption?.id;
                        if (selectedOptionId) {
                            optionCounts[selectedOptionId] = (optionCounts[selectedOptionId] || 0) + 1;
                        }
                    });

                    const totalAnswers = question.answers.length;

                    return (
                        <div key={questionIndex} className={style.container__wrapper}>
                            <span className={style.container__input_text}>
                                {question.title} (
                                {question?.type === 'one_variant'
                                    ? 'с одним варинтом ответа'
                                    : 'с несколькими варантами ответов'}
                                )
                            </span>

                            {question.options.map((option: any, index: any) => {
                                const optionCount = optionCounts[option.id] || 0;
                                const percentage = totalAnswers > 0 ? (optionCount / totalAnswers) * 100 : 0;

                                return (
                                    <div className={style.container__wrapper_radio} key={index}>
                                        <div className={style.container__wrapper_line}>
                                            <div className={style.container__wrapper_left}>
                                                <span className={style.container__text}>{option.optionName}</span>
                                                <span className={style.container__text}>{percentage.toFixed()}%</span>
                                            </div>
                                            <div className={style.container__wrapper_right}>
                                                <div
                                                    className={style.container__line}
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className={style.container__wrapper_answered_by}>
                                <span className={style.container__input_text}>Ответы ({totalAnswers})</span>
                                {question.answers.map((answer: any, index: any) => (
                                    <div className={style.container__card} key={index}>
                                        <div className={style.container__card_head}>
                                            <img src={logo} alt="logo" className={style.container__img} />
                                            <div className={style.container__wrapper_card_title}>
                                                <h2 className={style.container__title}>
                                                    {`${answer.answeredBy.last_name} ${answer.answeredBy.first_name} ${answer.answeredBy.sur_name}`}
                                                </h2>
                                                <span className={style.container__name}>
                                                    {answer.answeredBy.sub_position}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={style.container__input_text_req}>
                                            {answer.selectedOption?.optionName || 'No answer'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default SurveysResult;

