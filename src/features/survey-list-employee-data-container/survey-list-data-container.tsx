import { FC, ReactElement } from 'react';
import { SurveyListEmployeeContainerProps } from './types';
import { SurveyCard } from '../../entities/survey-items/survey-card/survey-card';
import { useParams } from 'react-router';

export const SurveyListEmployeeContainer: FC<SurveyListEmployeeContainerProps> = ({ surveys }): ReactElement => {
    const { sort } = useParams();
    return (
        <>
            {surveys?.length ? (
                surveys?.map((survey) => (
                    <SurveyCard
                        key={survey?.id}
                        navigationUrl={`/survey/employee/${sort}/${survey.id}`}
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

