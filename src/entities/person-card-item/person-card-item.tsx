import { Link } from 'react-router-dom';

import { FC, ReactElement } from 'react';
import { PersonCardProps } from './types';
import fakeAvatar from '../../assets/Ellipse 1.svg';

import styles from './person-card-item.module.scss';

export const PersonCard: FC<PersonCardProps> = ({ navigationUrl, name, role, skills }): ReactElement => {
    return (
        <div className={styles.person_card}>
            <img className={styles.person_card__avatar} src={fakeAvatar} alt="avatar∂" />
            <div className={styles.person_card__container}>
                <div className={styles.person_card__name_and_role}>
                    <Link to={navigationUrl} className={styles.person_card__name}>
                        {name}
                    </Link>
                    <span className={styles.person_card__role}>{role?.title || 'Менджер проектов'}</span>
                </div>
                <div className={styles.person_card__decor_line}></div>
                <div className={styles.person_card__skill_wrapper}>
                    {skills?.map((skill) => (
                        <div className={styles.person_card__skill} key={`skill-${skill.id}`}>
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

