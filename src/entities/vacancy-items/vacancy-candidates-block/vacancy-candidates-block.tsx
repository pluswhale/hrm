import { FC, ReactElement } from 'react';
import { VacancyCandidatesBlockProps } from './types';

import styles from './vacancy-candidates-block.module.scss';
import { VacancyCandidateCard } from '../vacancy-candidate-card';

export const VacancyCandidatesBlock: FC<VacancyCandidatesBlockProps> = ({ candidatesRow }): ReactElement => {
    return (
        <div className={styles.vacancy_candidates_block}>
            <span className={styles.vacancy_candidates_block__count}>
                {candidatesRow.title}-{candidatesRow.count}
            </span>
            <div className={styles.vacancy_candidates_block__card}>
                <div className={styles.vacancy_candidates_block__card_container}>
                    {candidatesRow?.candidates &&
                        candidatesRow.candidates.map((candidate) => <VacancyCandidateCard candidate={candidate} />)}
                </div>
            </div>
        </div>
    );
};

