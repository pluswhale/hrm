import { FC, ReactElement } from 'react';
import styles from './vacancies-block.module.scss';
import { VacanciesBlockProps } from './types';
import { VacancyItem } from '../vacancy-item';

export const VacanciesBlock: FC<VacanciesBlockProps> = ({ vacancies }): ReactElement => {
    return (
        <div className={styles.vacancies_block}>
            <div className={styles.vacancies_block__container}>
                <h4 className={styles.vacancies_block__title}>Вакансии</h4>
                {vacancies && vacancies.map((vacancy) => <VacancyItem vacancy={vacancy} />)}
            </div>
        </div>
    );
};

