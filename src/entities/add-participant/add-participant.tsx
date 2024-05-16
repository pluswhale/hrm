import { FC, ReactElement, useState } from 'react';
import closeIcon from '../../assets/close_icon.svg';
import styles from './add-participant.module.scss';
import { AddParticipantProps } from './types';
import { Search } from 'react-bootstrap-icons';
import { Button } from '../../shared/components/button/button';
import { useLocation, useNavigate } from 'react-router';
import { fetchAllCandidates } from 'shared/api/candidates/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import mockAvatar from '../../assets/Ellipse 1.svg';

export const AddParticipant: FC<AddParticipantProps> = ({ onClose }): ReactElement => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pickedCandidatesIds, setPickedCandidatesIds] = useState<string[]>([]);

    const queryParameters = {
        queryKey: 'fetchAllCandidates',
        queryThunk: fetchAllCandidates,
    } as QueryParameters<any>;

    const candidatesQuery = useFetchData(queryParameters);

    const isVacanciesPages = location.pathname.includes('vacancies');

    const onNavigateToCreateCandidate = () => {
        navigate('/create/candidate');
    };

    const onPickCandidate = (candidateId: string) => {
        if (!pickedCandidatesIds.some((cur) => cur === candidateId)) {
            setPickedCandidatesIds((prev) => [...prev, candidateId]);
        } else {
            return;
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.container__title}>
                Добавление участников
                <img src={closeIcon} alt="closeIcon" onClick={onClose} />
            </h2>
            <div className={styles.container__input_wrapper}>
                <input className={styles.container__input} placeholder="Поиск" />
                <Search />
            </div>
            <div className={styles.container__wrapper}>
                {candidatesQuery?.data?.map((person: any, index: number) => (
                    <div className={styles.container__people} key={index}>
                        <input
                            value={person?.id}
                            onChange={({ target }) => onPickCandidate(target.value)}
                            type="checkbox"
                            className={styles.container__checkbox}
                        />
                        <img
                            src={person.img || mockAvatar}
                            alt={'candidate avatar'}
                            className={styles.container__img}
                        />
                        {person.firstName + ' ' + person.surname}
                    </div>
                ))}
            </div>
            <div className={styles.container__wrapper_btn}>
                {/* {isVacanciesPages && (
                    <Button
                        onClick={onNavigateToCreateCandidate}
                        styles={{ width: '167px', height: '40px' }}
                        text="Создать кандидата"
                        view="default_bg"
                    />
                )} */}
                <Button type="button" styles={{ width: '167px', height: '40px' }} text="Добавить" view="default_bg" />
            </div>
        </div>
    );
};

