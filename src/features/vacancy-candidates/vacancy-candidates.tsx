import { FC, ReactElement, useState } from 'react';
import { VacancyCandidatesProps } from './types';

import { Button } from 'shared/components/button/button';
import { VacancyCandidatesBlock } from 'entities/vacancy-items/vacancy-candidates-block';
import { PopupWithDarkOverlay } from 'shared/components/portal/popup-with-dark-overlay';
import { VacancyRecruitingFunnel } from 'entities/vacancy-items/vacancy-modals/vacancy-recruting-funnel/vacancy-recruiting-funnel';

import styles from './vacancy-candidates.module.scss';
import { AddParticipant } from 'entities/add-participant/add-participant';
import { AddParticipantProps } from './constants';

export const VacancyCandidates: FC<VacancyCandidatesProps> = ({ candidateRows }): ReactElement => {
    const [isModalRecruitingFunnelOpened, setIsModalRecruitingFunnelOpened] = useState<boolean>(false);
    const [isModalAddParticipantsOpened, setIsModalAddParticipantsOpened] = useState<boolean>(false);

    const candidatesCount = candidateRows ? candidateRows.reduce((acc, row) => row.count + acc, 0) : 0;

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
                    <VacancyCandidatesBlock />
                </div>
            </div>
            <PopupWithDarkOverlay onClose={onCloseModalRecruitingFunnel} isOpened={isModalRecruitingFunnelOpened}>
                <VacancyRecruitingFunnel onClose={onCloseModalRecruitingFunnel} />
            </PopupWithDarkOverlay>
            <PopupWithDarkOverlay onClose={onCloseModalAddParticipants} isOpened={isModalAddParticipantsOpened}>
                <AddParticipant people={AddParticipantProps} onClose={onCloseModalAddParticipants} />
            </PopupWithDarkOverlay>
        </>
    );
};

