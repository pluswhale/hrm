import { FC, ReactElement } from 'react';
import { HorizontalNavigationProps } from './types';
import { Link, useNavigate } from 'react-router-dom';
import backArrow from '../../../assets/back_arrow.svg';

import styles from './horizontal-navigation.module.scss';

export const HorizontalNavigation: FC<HorizontalNavigationProps> = ({ navigation }): ReactElement => {
    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.horizontal_navigation}>
            <span className={styles.horizontal_navigation__back_wrapper} onClick={onNavigateBack}>
                <img className={styles.horizontal_navigation__back_icon} src={backArrow} alt="back" />
            </span>
            {navigation &&
                navigation.map((item, index) => (
                    <>
                        <Link
                            key={item.title}
                            className={`
                                ${styles.horizontal_navigation__item} 
                                ${navigation?.length - 1 === index ? styles.active : ''}
                            `}
                            to={item.url || ''}
                        >
                            {item.title}
                        </Link>
                        {navigation.length - 1 !== index ? (
                            <span key={index} className={styles.horizontal_navigation__slash}>
                                /
                            </span>
                        ) : (
                            ''
                        )}
                    </>
                ))}
        </div>
    );
};

