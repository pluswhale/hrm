import { FC, ReactElement, useState } from 'react';
import closeIcon from '../../assets/close_icon.svg';
import styles from './add-participant.module.scss';
import { AddParticipantProps } from './types';
import { Search } from 'react-bootstrap-icons';
import { Button } from '../../shared/components/button/button';
import mockAvatar from '../../assets/Ellipse 1.svg';

export const AddParticipant: FC<AddParticipantProps> = ({ personsData, onAddInModal, onClose }): ReactElement => {
    const [pickedPersonsIds, setPickedPersonIds] = useState<string[]>([]);

    const onPickCandidate = (candidateId: string) => {
        if (!pickedPersonsIds.some((cur) => cur === candidateId)) {
            setPickedPersonIds((prev) => [...prev, candidateId]);
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
                {personsData?.map((person: any, index: number) => (
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
                        {person.last_name + ' ' + person.first_name}
                    </div>
                ))}
            </div>
            <div className={styles.container__wrapper_btn}>
                <Button
                    onClick={() => onAddInModal(pickedPersonsIds?.map((id) => Number(id)))}
                    type="button"
                    styles={{ width: '167px', height: '40px' }}
                    text="Добавить"
                    view="default_bg"
                />
            </div>
        </div>
    );
};

