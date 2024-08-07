import { FC } from 'react';
import styles from './vacancies-experience.module.scss';
import { ExperienceItemProps, VacanciesExperienceProps } from './types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

dayjs.extend(duration);
dayjs.extend(relativeTime);

dayjs.locale('ru');

export const VacanciesExperience: FC<VacanciesExperienceProps> = ({ experiences }) => {
    return (
        <div className={styles.experience_block}>
            <div className={styles.experience_block__container}>
                <p className={styles.experience_block__title}>Опыт работы</p>
                {experiences &&
                    experiences.map((experience) => <ExperienceItem key={experience?.id} experience={experience} />)}
            </div>
        </div>
    );
};

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
    const work_start_date = experience?.work_start_date;
    const work_end_date = experience?.work_end_date;

    const startDate = dayjs(work_start_date);
    const endDate = dayjs(work_end_date);

    const diffYears = endDate.diff(startDate, 'year');
    const diffMonths = endDate.diff(startDate.add(diffYears, 'year'), 'month');

    const formattedDifference = `${diffYears} года ${diffMonths} месяцев`;

    const formattedStartDate = dayjs(work_start_date).format('MMMM YYYY');
    const formattedEndDate = dayjs(work_end_date).format('MMMM YYYY');

    const formattedDateRange = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div className={styles.experience_item}>
            <span className={styles.experience_item__exp}>
                {formattedDateRange} ({formattedDifference})
            </span>
            <span className={styles.experience_item__company_name}>{experience.company_name}</span>
            <a
                className={styles.experience_item__link}
                href={experience?.company_name}
                target="_blank"
                rel="noreferrer"
            >
                {experience.company_name}
            </a>
            <div className={styles.experience_item__row}>
                <span className={styles.experience_item__row_label}>Должность:</span>
                <span className={styles.experience_item__row_value}>{experience?.position}</span>
            </div>
            <div className={styles.experience_item__col}>
                <span className={styles.experience_item__row_label}>Обязанности и достижения:</span>
                {experience?.responsibilities_achievements && (
                    <span className={styles.experience_item__row_value}>
                        {experience?.responsibilities_achievements}
                    </span>
                )}
            </div>
        </div>
    );
};

