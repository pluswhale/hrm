import { FC, ReactElement } from 'react';
import styles from './vacancy-description-card.module.scss';
import { VacancyDescriptionCardProps } from './types';

export const VacancyDescriptionCard: FC<VacancyDescriptionCardProps> = ({ title, content }): ReactElement => {
    return (
        <div className={styles.vacancy_description}>
            <div className={styles.vacancy_description__card_wrapper}>
                <h4 className={styles.vacancy_description__title}>{title}</h4>
                <div className={styles.vacancy_description__card_wrapper__content}>
                    {content &&
                        content.map((row) => (
                            <div className={styles.vacancy_description__row}>
                                <span className={styles.vacancy_description__row_title}>{row.title}</span>
                                {row?.data?.map((text) => (
                                    <span className={styles.vacancy_description__row_value}>{row.title}</span>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

