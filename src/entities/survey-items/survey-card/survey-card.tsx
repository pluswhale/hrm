import { FC, ReactElement } from 'react';
import { SurveyCardProps } from './types';
import styles from './survey-card.module.scss';
import { Link } from 'react-router-dom';

export const SurveyCard: FC<SurveyCardProps> = ({
    title,
    totalParticipants,
    completedParticipants,
    id,
    deadlineFrom,
    deadlineTo,
}): ReactElement => {
    return (
        <div className={styles.survey_card}>
            <div className={styles.survey_card__container}>
                <div className={styles.survey_card__title_and_status}>
                    <Link className={styles.survey_card__title} to={`/survey/${id}`}>
                        <h5 className={styles.survey_card__title}>{title}</h5>
                    </Link>
                </div>

                <div className={styles.survey_card__created_and_deadline}>
                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>Дата начала:</span>
                        <span className={styles.survey_card__row_value}>{deadlineFrom}</span>
                    </div>

                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>Дата завершения:</span>
                        <span className={styles.survey_card__row_value}>{deadlineTo}</span>
                    </div>
                </div>

                <div className={styles.survey_card__count}>
                    <div className={styles.survey_card__row}>
                        <span className={styles.survey_card__row_label}>Прошедшие опрос:</span>
                        <span className={styles.survey_card__row_value}>
                            {completedParticipants} из {totalParticipants}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

