import React, { FC, ReactElement } from 'react';
import closeIcon from '../../../../assets/close_icon.svg';
import styles from './add-participant.module.scss';
import { AddParticipantProps } from './types';
import { Search } from 'react-bootstrap-icons';
import { Button } from '../../../../shared/components/button/button';

export const AddParticipant: FC<AddParticipantProps> = ({ onClose, people }): ReactElement => {
    return (
        <div className={styles.container}>
            <h2 className={styles.container__title}>
                Добавление участников
                <img src={closeIcon} alt='closeIcon' onClick={onClose}/>
            </h2>
            <div className={styles.container__input_wrapper}>
                <input className={styles.container__input} placeholder="Поиск" />
                <Search />
            </div>
            <div className={styles.container__wrapper}>
                {people.map((person, index) => (
                    <div className={styles.container__people} key={index}>
                        <input type='checkbox' className={styles.container__checkbox}/>
                        <img src={person.img} alt={person.img} className={styles.container__img}/>
                        {person.title}
                    </div>
                ))}
            </div>
            <div className={styles.container__wrapper_btn}>
            <Button styles={{ width: '167px', height: '40px' }} text="Добавить" view="default_bg" />
            </div>
        </div>
    );
};
