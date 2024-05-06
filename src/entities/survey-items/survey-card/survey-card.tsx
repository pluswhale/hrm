import { FC, ReactElement } from "react";
import { SurveyCardProps } from "./types";
import styles from './survey-card.module.scss';
import { Link } from "react-router-dom";

export const SurveyCard: FC<SurveyCardProps> = (
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

        return <span style={{ backgroundColor: color }} className={styles.survey_card__status}>{status}</span>
    }

    return (
        <div className={styles.survey_card}>
            <div className={styles.survey_card__container}>

                <div className={styles.survey_card__title_and_status}>
                    <Link to={`/`}>
                        <h5 className={styles.survey_card__title}>
                            {title}
                        </h5>
                    </Link>

                    {displayStatus(status)}
                </div>

                <div className={styles.survey_card__created_and_deadline}>
                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>
                           Дата начала:
                        </span>
                        <span className={styles.survey_card__row_value}>
                            {created_at}
                        </span>
                    </div>

                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>
                           Дата завершения:
                        </span>
                        <span className={styles.survey_card__row_value}>
                            {deadline}
                        </span>
                    </div>
                </div>

                <div className={styles.survey_card__count}>
                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>
                            Прошедшие опрос:
                        </span>
                        <span className={styles.survey_card__row_value}>
                            {candidatesCount}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}