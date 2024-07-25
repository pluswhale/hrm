import { FC, ReactElement } from 'react';
import styles from './vacancy-competences-block.module.scss';
import { VacancyCompetencesBlockProps } from './types';

export const VacancyCompetencesBlock: FC<VacancyCompetencesBlockProps> = ({ competences }): ReactElement => {
    return (
        <div className={styles.vacancy_competences}>
            <div className={styles.vacancy_competences__card_wrapper}>
                <h4 className={styles.vacancy_competences__title}>Ключевые навыки</h4>
                <div className={styles.vacancy_competences__card_wrapper__content}>
                    <div className={styles.vacancy_competences__row}>
                        {competences &&
                            competences?.map((competence: any) => (
                                <span key={competence?.id} className={styles.vacancy_competences__row_value}>
                                    {competence?.name}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

