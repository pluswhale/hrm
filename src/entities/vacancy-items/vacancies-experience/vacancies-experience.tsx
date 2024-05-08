import { FC } from 'react';
import styles from './vacancies-experience.module.scss';
import { ExperienceItemProps, VacanciesExperienceProps } from './types';

export const VacanciesExperience: FC<VacanciesExperienceProps> = ({ experiences }) => {
    return (
        <div className={styles.experience_block}>
            <div className={styles.experience_block__container}>
                <p className={styles.experience_block__title}>Опыт работы</p>
                {experiences && experiences.map((experience) => <ExperienceItem experience={experience} />)}
            </div>
        </div>
    );
};

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
    return (
        <div className={styles.experience_item}>
            <span className={styles.experience_item__exp}>{experience.experience}</span>
            <span className={styles.experience_item__company_name}>{experience.company_name}</span>
            <a className={styles.experience_item__link} href={experience.company_url} target="_blank">
                {experience.company_url_name}
            </a>
            <div className={styles.experience_item__row}>
                <span className={styles.experience_item__row_label}>Должность:</span>
                <span className={styles.experience_item__row_value}>{experience.job_title}</span>
            </div>
            <div className={styles.experience_item__col}>
                <span className={styles.experience_item__row_label}>Обязанности и достижения:</span>
                {experience.responsibilities_and_achievements &&
                    experience.responsibilities_and_achievements.map((res_ach) => (
                        <span className={styles.experience_item__row_value}>{res_ach}</span>
                    ))}
            </div>
        </div>
    );
};

