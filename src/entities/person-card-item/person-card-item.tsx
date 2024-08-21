import { Link } from 'react-router-dom';

import { FC, ReactElement } from 'react';
import { PersonCardProps } from './types';
import fakeAvatar from '../../assets/Ellipse 1.svg';

import styles from './person-card-item.module.scss';
import { useMediaQuery } from 'react-responsive';

export const PersonCard: FC<PersonCardProps> = ({ navigationUrl, name, role, skills }): ReactElement => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    return (
        <div className={styles.person_card}>
            {!isMobile ? <img className={styles.person_card__avatar} src={fakeAvatar} alt="avatar∂" /> : null}
            <div className={styles.person_card__container}>
                {isMobile ? <img className={styles.person_card__avatar} src={fakeAvatar} alt="avatar∂" /> : null}
                <div className={styles.person_card__name_and_role}>
                    <Link to={navigationUrl} className={styles.person_card__name}>
                        {name}
                    </Link>
                    <span className={styles.person_card__role}>{role?.title || 'Менджер проектов'}</span>
                </div>
                {!isMobile ? <div className={styles.person_card__decor_line}></div> : null}
                {!isMobile ? (
                    <div className={styles.person_card__skill_wrapper}>
                        {skills?.map((skill) => (
                            <div className={styles.person_card__skill} key={`skill-${skill.id}`}>
                                {skill.name}
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

