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
                        key={candidate?.id}
                        navigationUrl={`/candidates/${candidate?.id}`}
                        imageSrc={''}
                        name={candidate?.name}
                        role={candidate?.role as any}
                        skills={candidate?.skills as any}
                    />
                ))
            ) : (
                <p>Нет кандидатов</p>
            )}
        </div>
    );
};

