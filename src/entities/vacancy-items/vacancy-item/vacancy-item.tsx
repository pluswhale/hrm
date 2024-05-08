import { FC, ReactElement } from 'react';
import styles from './vacancy-item.module.scss';
import { VacancyItemProps } from './types';

export const VacancyItem: FC<VacancyItemProps> = ({ vacancy }): ReactElement => {
    const displayStatus = (status: string) => {
        let color = '';

        switch (status) {
            case 'Закрыта': {
                color = '#8A8A8A';
                break;
            }
            case 'В работе': {
                color = '#6362E7';
                break;
            }
            default:
                color = '#6362E7';
        }

        return (
            <span style={{ backgroundColor: color }} className={styles.vacancy_item__status}>
                {status}
            </span>
        );
    };

    return (
        <div className={styles.vacancy_item}>
            <div className={styles.vacancy_item__title_and_status}>
                <h4 className={styles.vacancy_item__title}>{vacancy.title}</h4>
                {displayStatus(vacancy?.status)}
            </div>

            <div className={styles.vacancy_item__row}>
                <span className={styles.vacancy_item__row_label}>Желаемая заработная плата:</span>
                <span className={styles.vacancy_item__row_value}>{vacancy.preferredIncome}</span>
            </div>

            <div className={styles.vacancy_item__row}>
                <span className={styles.vacancy_item__row_label}>Занятость:</span>
                <span className={styles.vacancy_item__row_value}>{vacancy.employment}</span>
            </div>

            <div className={styles.vacancy_item__row}>
                <span className={styles.vacancy_item__row_label}>График работы:</span>
                <span className={styles.vacancy_item__row_value}>{vacancy.schedule}</span>
            </div>
        </div>
    );
};
