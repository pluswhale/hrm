import { FC, ReactElement } from 'react';
import { VacancyHeaderProps } from './types';
import styles from './vacancy-header.module.scss';

export const VacancyHeader: FC<VacancyHeaderProps> = ({ title }): ReactElement => {
    return (
        <div className={styles.vacancy_header}>
            <h3 className={styles.vacancy_header__title}>{title}</h3>
        </div>
    );
};

