import { PersonCard } from '../../entities/person-card-item';
import { FC, ReactElement } from 'react';
import { CandidatesDataContainerProps } from './types';

import style from './candidates-data-container.module.scss';

export const CandidatesDataContainer: FC<CandidatesDataContainerProps> = ({ candidates }): ReactElement => {
    return (
        <div className={style.candidates_container}>
            {candidates?.length ? (
                candidates?.map((candidate) => (
                    <PersonCard
                        key={candidate?.hrmUserId}
                        navigationUrl={`/candidates/${candidate.hrmUserId}`}
                        imageSrc={''}
                        name={candidate?.firstName + ' ' + candidate?.surname}
                        role={''}
                        skills={['']}
                    />
                ))
            ) : (
                <p>Нет кандидатов</p>
            )}
        </div>
    );
};

