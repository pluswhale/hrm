import { FC, ReactElement } from 'react';
import { VacancyCandidateCardProps } from './types';

import mockAvatar from '../../../assets/Ellipse 1.svg';

import { Link, useParams } from 'react-router-dom';

import styles from './vacancy-card.module.scss';

export const VacancyCandidateCard: FC<VacancyCandidateCardProps> = ({ candidate }): ReactElement => {
    const { id: vacancyId } = useParams();

    return (
        <div className={styles.vacancy_candidate_card}>
            <div className={styles.vacancy_candidate_card__container}>
                <img
                    className={styles.vacancy_candidate_card__avatar}
                    src={candidate.avatar || mockAvatar}
                    alt="candidate avatar"
                />
                <div className={styles.vacancy_candidate_card__title_and_info}>
                    <Link to={`/vacancies/${vacancyId}/${candidate.id}`}>
                        <h5 className={styles.vacancy_candidate_card__title}>{candidate.name}</h5>
                    </Link>
                    <span className={styles.vacancy_candidate_card__info}>{candidate.preferredIncome}</span>
                    <span className={styles.vacancy_candidate_card__info}>{candidate.experience}</span>
                </div>
            </div>
        </div>
    );
};

