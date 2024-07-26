import { FC, ReactElement } from 'react';
import { PracticeCardProps } from './types';

import styles from './practice-card.module.scss';
import { Link } from 'react-router-dom';

export const PracticeCard: FC<PracticeCardProps> = ({
    name,
    created_at,
    id,
    deadline,
    desired_count_candidates,
    is_active,
}): ReactElement => {
    const displayStatus = (status: boolean) => {
        let color = '';
        let statusText = '';

        switch (status) {
            case false: {
                color = 'red';
                statusText = 'Закрыта';
                break;
            }
            case true: {
                color = '#6362E7';
                statusText = 'В работе';
                break;
            }
            default:
                statusText = 'В работе';
                color = '#6362E7';
        }

        return (
            <span style={{ backgroundColor: color }} className={styles.practice_card__status}>
                {statusText}
            </span>
        );
    };

    return (
        <div className={styles.practice_card}>
            <div className={styles.practice_card__container}>
                <div className={styles.practice_card__title_and_status}>
                    <Link to={`/appeals/${id}`}>
                        <h5 className={styles.practice_card__title}>{name}</h5>
                    </Link>

                    {displayStatus(is_active)}
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
                        <span className={styles.practice_card__row_value}>{desired_count_candidates}</span>
                    </div>
                    <div className={styles.practice_card__row}>
                        <span className={styles.practice_card__row_label}>Принято:</span>
                        <span className={styles.practice_card__row_value}>{4}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

