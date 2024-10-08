import { FC, ReactElement, useState } from 'react';
import { VacancyCandidatesProps } from './types';

import { Button } from 'shared/components/button/button';
import { VacancyCandidatesBlock } from 'entities/vacancy-items/vacancy-candidates-block';
import { PopupWithDarkOverlay } from 'shared/components/portal/popup-with-dark-overlay';
import { VacancyRecruitingFunnel } from 'entities/vacancy-items/vacancy-modals/vacancy-recruting-funnel/vacancy-recruiting-funnel';

import styles from './vacancy-candidates.module.scss';
import { AddParticipant } from 'entities/add-participant/add-participant';
import { useBindCandidateToVacancy } from 'shared/api/vacancies/mutations';
import { useParams } from 'react-router';
import { fetchAllCandidates } from 'shared/api/candidates/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';

export const VacancyCandidates: FC<VacancyCandidatesProps> = ({ stages }): ReactElement => {
    const { id: vacancyId } = useParams();
    const [isModalRecruitingFunnelOpened, setIsModalRecruitingFunnelOpened] = useState<boolean>(false);
    const [isModalAddParticipantsOpened, setIsModalAddParticipantsOpened] = useState<boolean>(false);
    const bindCandidatesToVacancyMutation = useBindCandidateToVacancy();

    const queryParameters = {
        queryKey: 'fetchAllCandidates',
        queryThunk: fetchAllCandidates,
    } as QueryParameters<any>;

    const candidatesQuery = useFetchData(queryParameters);

    //@ts-ignore
    const candidatesCount = stages ? stages.reduce((acc, row) => row.candidates?.length + acc, 0) : 0;
    //@ts-ignore
    const candidateIdsInStages = stages?.flatMap((stage) => stage.candidates)?.map((candidate) => candidate.id);
    const availableCandidates = candidatesQuery?.data?.filter(
        (candidate: any) => !candidateIdsInStages?.includes(candidate.id),
    );

    const onOpenModalRecruitingFunnel = () => {
        setIsModalRecruitingFunnelOpened(true);
    };

    const onCloseModalRecruitingFunnel = () => {
        setIsModalRecruitingFunnelOpened(false);
    };

    const onOpenModalAddParticipants = () => {
        setIsModalAddParticipantsOpened(true);
    };

    const onCloseModalAddParticipants = () => {
        setIsModalAddParticipantsOpened(false);
    };

    const onAddInModal = (candidateIds: number[]) => {
        bindCandidatesToVacancyMutation.mutate({ vacancyId: vacancyId || '', candidateIds });
    };

    return (
        <>
            <div className={styles.vacancy_candidates}>
                <div className={styles.vacancy_candidates__count_and_buttons}>
                    <span className={styles.vacancy_candidates__count}>Кандидаты - {candidatesCount}</span>
                    <div className={styles.vacancy_candidates__buttons}>
                        <Button onClick={onOpenModalRecruitingFunnel} text="Воронка рекрутинга" view="default_bg" />
                        <Button onClick={onOpenModalAddParticipants} text="Добавить кандидата" view="default_bg" />
                    </div>
                </div>
                <div className={styles.vacancy_candidates__list}>
                    {stages && <VacancyCandidatesBlock stages={stages} />}
                </div>
            </div>
            <PopupWithDarkOverlay onClose={onCloseModalRecruitingFunnel} isOpened={isModalRecruitingFunnelOpened}>
                <VacancyRecruitingFunnel vacancyId={vacancyId || ''} onClose={onCloseModalRecruitingFunnel} />
            </PopupWithDarkOverlay>
            <PopupWithDarkOverlay onClose={onCloseModalAddParticipants} isOpened={isModalAddParticipantsOpened}>
                <AddParticipant
                    personsData={availableCandidates}
                    onAddInModal={onAddInModal}
                    onClose={onCloseModalAddParticipants}
                />
            </PopupWithDarkOverlay>
        </>
    );
};

