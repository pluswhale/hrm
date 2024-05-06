import { FC, ReactElement } from 'react';
import styles from './vacancy-description-card.module.scss';
import { VacancyDescriptionCardProps } from './types';

export const VacancyDescriptionCard: FC<VacancyDescriptionCardProps> = ({ title, content }): ReactElement => {
    return (
        <div className={styles.vacancy_description}>
            <h4 className={styles.vacancy_description__title}>{title}</h4>

            <div className={styles.vacancy_description__card_wrapper}>
                <ul className={styles.vacancy_description__card_wrapper__content}>
                    {content &&
                        content.map((row) => (
                            <li className={styles.vacancy_description__card_wrapper__element}>{row}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

