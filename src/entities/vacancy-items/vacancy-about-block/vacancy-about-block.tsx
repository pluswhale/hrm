import { FC, ReactElement } from 'react';
import styles from './vacancy-about-block.module.scss';
import { VacancyAboutBlockProps } from './types';
import { formatDate } from 'shared/libs/dateFormater';

export const VacancyAboutBlock: FC<VacancyAboutBlockProps> = ({ vacancyData }): ReactElement => {
    return (
        <div className={styles.vacancy_about}>
            <div className={styles.vacancy_about__card_wrapper}>
                <h4 className={styles.vacancy_about__title}>О вакансии</h4>
                <div className={styles.vacancy_about__card_wrapper__content}>
                    <div className={styles.vacancy_about__row}>
                        <span className={styles.vacancy_about__row_title}>Создана:</span>
                        <span className={styles.vacancy_about__row_value}>{formatDate(vacancyData?.created_at)}</span>
                    </div>
                    <div className={styles.vacancy_about__row}>
                        <span className={styles.vacancy_about__row_title}>Дедлайн:</span>
                        <span className={styles.vacancy_about__row_value}>{formatDate(vacancyData?.deadline)}</span>
                    </div>

                    <div className={styles.vacancy_about__row}>
                        <span className={styles.vacancy_about__row_title}>Город размещения:</span>
                        <span className={styles.vacancy_about__row_value}>{vacancyData?.vacancy_city}</span>
                    </div>
                    <div className={styles.vacancy_about__row}>
                        <span className={styles.vacancy_about__row_title}>План поиска:</span>
                        <span className={styles.vacancy_about__row_value}>
                            {vacancyData?.desired_count_candidates}{' '}
                            {vacancyData?.desired_count_candidates > 1 ? 'человека' : 'человек'}
                        </span>
                    </div>

                    <div className={styles.vacancy_about__row}>
                        <span className={styles.vacancy_about__row_title}>Предполагаемый уровень дохода:</span>
                        <span className={styles.vacancy_about__row_value}>
                            {vacancyData?.income_from} - {vacancyData?.income_to} руб.
                        </span>
                    </div>
                    <div className={styles.vacancy_about__row}>
                        <span className={styles.vacancy_about__row_title}>Где будет работать сотрудник:</span>
                        <span className={styles.vacancy_about__row_value}>{vacancyData?.work_address}</span>
                    </div>
                    <div className={styles.vacancy_about__row}>
                        <span className={styles.vacancy_about__row_title}>Опыт работы:</span>
                        <span className={styles.vacancy_about__row_value}>{vacancyData?.needed_experience}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

