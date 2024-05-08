import React from 'react';
import style from './surveys-poople.module.scss';
import { Button } from '../../shared/components/button/button';
import { Filter } from '../filter';
import logo from '../../assets/Ellipse 1.svg';

const SurveysPoople = () => {
    const displayStatus = (status: string) => {
        let color = '';
        switch (status) {
            case 'Новый':
                color = '#6362E7';
                break;
            case 'Утвержден':
                color = '#81C314';
                break;
            case 'Отклонен':
                color = '#DD5555';
                break;
            default:
                color = '#E7D10D';
        }

        return (
            <span style={{ backgroundColor: color, color: 'white' }} className={style.container__status}>
                {status}
            </span>
        );
    };
    return (
        <div className={style.container}>
            <div className={style.container__wrapper}>
                <Button styles={{ width: 'fit-content', height: '40px' }} text="Добавить частника" view="default_bg" />
                <Button
                    styles={{ width: 'fit-content', height: '40px' }}
                    text="Напомнить об опросе"
                    view="default_bg"
                />
            </div>
            <div className={style.container__wraper_bootom}>
                <div className={style.container__wrapper_block}>
                    <div className={style.container__card}>
                        <div className={style.container__card_head}>
                            <img src={logo} alt="logo" className={style.container__img} />
                            <div className={style.container__wrapper_card_title}>
                                <h2 className={style.container__title}>Alesy Nickolayevna Dmitriyevna</h2>
                                <span className={style.container__name}>UX/UI Designer</span>
                            </div>
                        </div>
                        {displayStatus('Новый')}
                    </div>
                    <div className={style.container__card}>
                        <div className={style.container__card_head}>
                            <img src={logo} alt="logo" className={style.container__img} />
                            <div className={style.container__wrapper_card_title}>
                                <h2 className={style.container__title}>Alesy Nickolayevna Dmitriyevna</h2>
                                <span className={style.container__name}>UX/UI Designer</span>
                            </div>
                        </div>
                        {displayStatus('Новый')}
                    </div>
                    <div className={style.container__card}>
                        <div className={style.container__card_head}>
                            <img src={logo} alt="logo" className={style.container__img} />
                            <div className={style.container__wrapper_card_title}>
                                <h2 className={style.container__title}>Alesy Nickolayevna Dmitriyevna</h2>
                                <span className={style.container__name}>UX/UI Designer</span>
                            </div>
                        </div>
                        {displayStatus('Новый')}
                    </div>
                </div>
                <Filter title="Найти сотрудника" />
            </div>
        </div>
    );
};

export default SurveysPoople;
