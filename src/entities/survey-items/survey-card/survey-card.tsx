import { FC, ReactElement } from 'react';
import { SurveyCardProps } from './types';
import styles from './survey-card.module.scss';
import { Link, useParams } from 'react-router-dom';
import { formatDate } from 'shared/libs/dateFormater';

export const SurveyCard: FC<SurveyCardProps> = ({
    title,
    totalParticipants,
    completedParticipants,
    id,
    deadlineFrom,
    deadlineTo,
    navigationUrl,
}): ReactElement => {
    return (
        <div className={styles.survey_card}>
            <div className={styles.survey_card__container}>
                <div className={styles.survey_card__title_and_status}>
                    <Link className={styles.survey_card__title} to={navigationUrl}>
                        <h5 className={styles.survey_card__title}>{title}</h5>
                    </Link>
                </div>

                <div className={styles.survey_card__created_and_deadline}>
                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>Дата начала:</span>
                        <span className={styles.survey_card__row_value}>{formatDate(deadlineFrom)}</span>
                    </div>

                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>Дата завершения:</span>
                        <span className={styles.survey_card__row_value}>{formatDate(deadlineTo)}</span>
                    </div>
                </div>

                <div className={styles.survey_card__count}>
                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>Прошедшие опрос:</span>
                        <span className={styles.survey_card__row_value}>
                            {String(completedParticipants)} из {totalParticipants}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

