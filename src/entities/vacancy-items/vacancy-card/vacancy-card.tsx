import { FC, ReactElement } from "react";
import { VacancyCardProps } from "./types";

import styles from './vacancy-card.module.scss';
import { Link } from "react-router-dom";

export const VacancyCard: FC<VacancyCardProps> = (
    {
        title,
        created_at,
        candidatesCount,
        id,
        deadline,
        status
    }
): ReactElement => {

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
            default: color = '#6362E7';
        }

        return <span style={{ backgroundColor: color }} className={styles.vacancy_card__status}>{status}</span> 
    }

    return (
        <div className={styles.vacancy_card}>
            <div className={styles.vacancy_card__container}>

                <div className={styles.vacancy_card__title_and_status}>
                    <Link to={`/vacancies/${id}`}>
                        <h5 className={styles.vacancy_card__title}>
                            {title}
                        </h5>
                    </Link>

                    {displayStatus(status)}
                </div>

                <div className={styles.vacancy_card__created_and_deadline}>
                    <div className={styles.vacancy_card__row}>
                        <span className={styles.vacancy_card__row_label}>
                            Создана:
                        </span>
                        <span className={styles.vacancy_card__row_value}>
                            {created_at}
                        </span>
                    </div>

                    <div className={styles.vacancy_card__row}>
                        <span className={styles.vacancy_card__row_label}>
                            Дедлайн:
                        </span>
                        <span className={styles.vacancy_card__row_value}>
                            {deadline}
                        </span>
                    </div>
                </div>

                <div className={styles.vacancy_card__count}>
                    <div className={styles.vacancy_card__row}>
                        <span className={styles.vacancy_card__row_label}>
                            Количество кандидатов:
                        </span>
                        <span className={styles.vacancy_card__row_value}>
                            {candidatesCount}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}