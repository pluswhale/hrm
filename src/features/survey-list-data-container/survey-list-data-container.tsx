import { FC, ReactElement } from 'react';
import { SurveyListContainerProps } from './types';
import { SurveyCard } from '../../entities/survey-items/survey-card/survey-card';

export const SurveyListContainer: FC<SurveyListContainerProps> = ({ surveys }): ReactElement => {
    return (
        <>
            {surveys?.length ? (
                surveys?.map((survey) => (
                    <SurveyCard
                        key={survey?.id}
                        navigationUrl={`/survey/${survey.id}`}
                        title={survey?.name}
                        deadlineFrom={survey?.deadlineFrom}
                        deadlineTo={survey?.deadlineTo}
                        totalParticipants={survey?.totalParticipants}
                        completedParticipants={survey?.completedParticipants}
                        id={survey?.id}
                        status={survey?.status}
                    />
                ))
            ) : (
                <p>Нет опросов</p>
            )}
        </>
    );
};

