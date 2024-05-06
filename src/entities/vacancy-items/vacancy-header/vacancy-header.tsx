import { FC, ReactElement } from 'react';
import { VacancyHeaderProps } from './types';
import styles from './vacancy-header.module.scss';

export const VacancyHeader: FC<VacancyHeaderProps> = ({
    title,
    createdAt,
    deadline,
    preferredIncome,
}): ReactElement => {
    return (
        <div className={styles.vacancy_header}>
            <h3 className={styles.vacancy_header__title}>{title}</h3>

            <div className={styles.vacancy_header__row}>
                <span className={styles.vacancy_header__row_label}>Создана:</span>
                <span className={styles.vacancy_header__row_value}>{createdAt}</span>
            </div>

            <div className={styles.vacancy_header__row}>
                <span className={styles.vacancy_header__row_label}>Дедлайн:</span>
                <span className={styles.vacancy_header__row_value}>{deadline}</span>
            </div>

            <div className={styles.vacancy_header__row}>
                <span className={styles.vacancy_header__row_label}>Предполагаемый уровень дохода:</span>
                <span className={styles.vacancy_header__row_value}>{preferredIncome}</span>
            </div>
        </div>
    );
};

