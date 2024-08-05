import { FC, ReactElement } from 'react';
import { VacancyCardProps } from './types';

import styles from './vacancy-card.module.scss';
import { Link } from 'react-router-dom';
import { formatDate } from 'shared/libs/dateFormater';

export const VacancyCard: FC<any> = ({
    title,
    created_at,
    candidatesCount,
    id,
    deadline,
    status,
    is_active,
}): ReactElement => {
    const displayStatus = (isActive: boolean) => {
        let color = '#6362E7';
        let text = 'В работе';

        switch (status) {
            case false: {
                color = '#DD5555';
                text = 'Закрыта';
                break;
            }
            case true: {
                color = '#6362E7';
                text = 'В работа';
                break;
            }
            default:
                color = '#6362E7';
        }

        return (
            <span style={{ backgroundColor: color }} className={styles.vacancy_card__status}>
                {text}
            </span>
        );
    };

    return (
        <div className={styles.vacancy_card}>
            <div className={styles.vacancy_card__container}>
                <div className={styles.vacancy_card__title_and_status}>
                    <Link to={`/vacancies/${id}`}>
                        <h5 className={styles.vacancy_card__title}>{title}</h5>
                    </Link>

                    {displayStatus(is_active)}
                </div>

                <div className={styles.vacancy_card__created_and_deadline}>
                    <div className={styles.vacancy_card__row}>
                        <span className={styles.vacancy_card__row_label}>Создана:</span>
                        <span className={styles.vacancy_card__row_value}>{formatDate(created_at)}</span>
                    </div>

                    <div className={styles.vacancy_card__row}>
                        <span className={styles.vacancy_card__row_label}>Дедлайн:</span>
                        <span className={styles.vacancy_card__row_value}>{formatDate(deadline)}</span>
                    </div>
                </div>

                <div className={styles.vacancy_card__count}>
                    <div className={styles.vacancy_card__row}>
                        <span className={styles.vacancy_card__row_label}>Количество кандидатов:</span>
                        <span className={styles.vacancy_card__row_value}>{candidatesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

