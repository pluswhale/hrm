import { FC, ReactElement } from 'react';
import styles from './vacancy-item.module.scss';
import { VacancyItemProps } from './types';

export const VacancyItem: FC<VacancyItemProps> = ({ vacancy }): ReactElement => {
    const displayStatus = (status: boolean) => {
        let color = '#6362e7';
        let text = 'В работе';

        switch (status) {
            case false: {
                color = '#8A8A8A';
                text = 'Закрыта';
                break;
            }
            case true: {
                color = '#6362e7';
                text = 'В работе';
                break;
            }
            default:
                color = '#6362e7';
        }

        return (
            <span style={{ backgroundColor: color }} className={styles.vacancy_item__status}>
                {text}
            </span>
        );
    };

    return (
        <div className={styles.vacancy_item}>
            <div className={styles.vacancy_item__title_and_status}>
                <h4 className={styles.vacancy_item__title}>{vacancy.name}</h4>
                {displayStatus(vacancy?.is_active)}
            </div>

            <div className={styles.vacancy_item__row}>
                <span className={styles.vacancy_item__row_label}>Желаемая заработная плата:</span>
                <span className={styles.vacancy_item__row_value}>
                    {vacancy.income_from} - {vacancy?.income_to} руб.
                </span>
            </div>

            <div className={styles.vacancy_item__row}>
                <span className={styles.vacancy_item__row_label}>Занятость:</span>
                <span className={styles.vacancy_item__row_value}>полный день</span>
            </div>

            <div className={styles.vacancy_item__row}>
                <span className={styles.vacancy_item__row_label}>График работы:</span>
                <span className={styles.vacancy_item__row_value}>полная день, удаленная работа</span>
            </div>
        </div>
    );
};

