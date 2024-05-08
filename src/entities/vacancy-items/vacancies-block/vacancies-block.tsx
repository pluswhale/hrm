import { FC, ReactElement } from 'react';
import styles from './vacancies-block.module.scss';
import { VacanciesBlockProps } from './types';
import { VacancyItem } from '../vacancy-item';

export const VacanciesBlock: FC<VacanciesBlockProps> = ({ vacancies }): ReactElement => {
    return (
        <div className={styles.vacancies_block}>
            <div className={styles.vacancies_block__container}>
                <p>Вакансии</p>
                {vacancies && vacancies.map((vacancy) => <VacancyItem vacancy={vacancy} />)}
            </div>
        </div>
    );
};
