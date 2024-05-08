import { FC, ReactElement } from 'react';
import { PracticeCardProps } from './types';

import styles from './practice-card.module.scss';
import { Link } from 'react-router-dom';

export const PracticeCard: FC<PracticeCardProps> = ({
    title,
    created_at,
    id,
    deadline,
    seats,
    accepted,
    status,
}): ReactElement => {
    const displayStatus = (status: string) => {
        let color = '';

        switch (status) {
            case 'Закрыта': {
                color = 'red';
                break;
            }
            case 'В работе': {
                color = '#8A8A8A';
                break;
            }
            default:
                color = '#6362E7';
        }

        return (
            <span style={{ backgroundColor: color }} className={styles.practice_card__status}>
                {status}
            </span>
        );
    };

    return (
        <div className={styles.practice_card}>
            <div className={styles.practice_card__container}>
                <div className={styles.practice_card__title_and_status}>
                    <Link to={`/vacancies/${id}`}>
                        <h5 className={styles.practice_card__title}>{title}</h5>
                    </Link>

                    {displayStatus(status)}
                </div>

                <div className={styles.practice_card__created_and_deadline}>
                    <div className={styles.practice_card__row}>
                        <span className={styles.practice_card__row_label}>Создана:</span>
                        <span className={styles.practice_card__row_value}>{created_at}</span>
                    </div>

                    <div className={styles.practice_card__row}>
                        <span className={styles.practice_card__row_label}>Дедлайн:</span>
                        <span className={styles.practice_card__row_value}>{deadline}</span>
                    </div>
                </div>

                <div className={styles.practice_card__count}>
                    <div className={styles.practice_card__row}>
                        <span className={styles.practice_card__row_label}>Места:</span>
                        <span className={styles.practice_card__row_value}>{seats}</span>
                    </div>
                    <div className={styles.practice_card__row}>
                        <span className={styles.practice_card__row_label}>Принято:</span>
                        <span className={styles.practice_card__row_value}>{accepted}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

