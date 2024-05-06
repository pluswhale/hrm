import { FC, ReactElement } from 'react';
import closeIcon from '../../../../assets/close_icon.svg';
import { VacancyRecruitingFunnelProps } from './types';

import styles from './vacancy-recruiting-funnel.module.scss';
import { colorPalette, RECRUITING_FUNNEL_DATA } from './constants';

export const VacancyRecruitingFunnel: FC<VacancyRecruitingFunnelProps> = ({ onClose }): ReactElement => {
    return (
        <div className={styles.vacancy_recruiting_funnel}>
            <div className={styles.vacancy_recruiting_funnel__container}>
                <div className={styles.vacancy_recruiting_funnel__title_and_close}>
                    <span className={styles.vacancy_recruiting_funnel__title}>Воронка рекрутига</span>
                    <img
                        onClick={onClose}
                        className={styles.vacancy_recruiting_funnel__close}
                        src={closeIcon}
                        alt="close icon"
                    />
                </div>

                <div className={styles.recruitment_funnel}>
                    <div className={styles.header}>
                        <div className={`${styles.column} ${styles.large}`}>Этап</div>
                        <div className={styles.column}>
                            Абсолютная <br /> конверсия
                        </div>
                        <div className={styles.column}>
                            Относительная <br /> конверсия
                        </div>
                    </div>
                    {RECRUITING_FUNNEL_DATA.map((item, index) => (
                        <div className={styles.row} key={index}>
                            <div className={`${styles.value} ${styles.large}`}>
                                <p className={styles.stage_value}>{item.stage}</p>
                                <span style={{ backgroundColor: colorPalette[item.value] }} className={styles.color_bg}>
                                    {item.value}
                                </span>
                            </div>
                            <div className={styles.value}>{item.absolute}</div>
                            <div className={styles.value}>{item.relative}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

