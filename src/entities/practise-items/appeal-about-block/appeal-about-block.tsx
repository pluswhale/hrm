import { FC, ReactElement } from 'react';
import styles from './appeal-about-block.module.scss';
import { AppealAboutBlockProps } from './types';
import { formatDate } from 'shared/libs/dateFormater';

export const AppealAboutBlock: FC<AppealAboutBlockProps> = ({ appealData }): ReactElement => {
    return (
        <div className={styles.appeal_about}>
            <div className={styles.appeal_about__card_wrapper}>
                <h4 className={styles.appeal_about__title}>О вакансии</h4>
                <div className={styles.appeal_about__card_wrapper__content}>
                    <div className={styles.appeal_about__row}>
                        <span className={styles.appeal_about__row_title}>Создана:</span>
                        <span className={styles.appeal_about__row_value}>{formatDate(appealData?.created_at)}</span>
                    </div>
                    <div className={styles.appeal_about__row}>
                        <span className={styles.appeal_about__row_title}>Дедлайн:</span>
                        <span className={styles.appeal_about__row_value}>{formatDate(appealData?.deadline)}</span>
                    </div>

                    <div className={styles.appeal_about__row}>
                        <span className={styles.appeal_about__row_title}>Места:</span>
                        <span className={styles.appeal_about__row_value}>{appealData?.desired_count_candidates}</span>
                    </div>
                    <div className={styles.appeal_about__row}>
                        <span className={styles.appeal_about__row_title}>Принято:</span>
                        <span className={styles.appeal_about__row_value}>0</span>
                    </div>

                    <div className={styles.appeal_about__row}>
                        <span className={styles.appeal_about__row_title}>Тестовое задание:</span>
                        <span className={styles.appeal_about__row_value}>
                            <a href={appealData?.test_task_link} target="_blank" rel="noreferrer">
                                {' '}
                                Link{' '}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

