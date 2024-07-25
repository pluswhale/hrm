import { FC, ReactElement } from 'react';
import { VacancyCandidateCardProps } from './types';
import mockAvatar from '../../../assets/Ellipse 1.svg';
import { Link, useParams } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import styles from './vacancy-card.module.scss';

export const VacancyCandidateCard: FC<VacancyCandidateCardProps> = ({ candidate, index }): ReactElement => {
    const { id: vacancyId } = useParams();

    return (
        <Draggable key={candidate.id} draggableId={String(candidate.id)} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className={styles.vacancy_candidate_card}>
                        <div className={styles.vacancy_candidate_card__container}>
                            <img
                                className={styles.vacancy_candidate_card__avatar}
                                src={candidate.avatar || mockAvatar}
                                alt="candidate avatar"
                            />
                            <div className={styles.vacancy_candidate_card__title_and_info}>
                                <Link to={`/vacancies/${vacancyId}/${candidate.id}`}>
                                    <h5 className={styles.vacancy_candidate_card__title}>
                                        {candidate.last_name + ' ' + candidate?.first_name}
                                    </h5>
                                </Link>
                                <span className={styles.vacancy_candidate_card__info}>{candidate.preferredIncome}</span>
                                <span className={styles.vacancy_candidate_card__info}>{candidate.experience}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

