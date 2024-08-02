import { NavItemTree } from 'features/nav-item-tree';
import { FC, ReactElement } from 'react';
import { NAV_LINKS_FOR_HR_MANAGER } from '../../constants';
import { Dash } from 'react-bootstrap-icons';

import styles from './hr-manager-set.module.scss';
import { Link, NavLink } from 'react-router-dom';

export const HRManagerSet: FC = (): ReactElement => {
    return (
        <div className={styles.sidebar__nav}>
            <NavItemTree title={'Компания'} className={styles.sidebar__navLink}>
                {NAV_LINKS_FOR_HR_MANAGER?.company?.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.url}
                        className={
                            ({ isActive }) => `${styles.sidebar__navLink_text} ${isActive ? styles.activeLink : ''}` // Apply active class conditionally
                        }
                    >
                        <Dash className={'mx-2'} />
                        {link.title}
                    </NavLink>
                ))}
            </NavItemTree>
            <NavItemTree title={'Подбор персонала'} className={styles.sidebar__navLink}>
                {NAV_LINKS_FOR_HR_MANAGER?.personal?.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.url}
                        className={
                            ({ isActive }) => `${styles.sidebar__navLink_text} ${isActive ? styles.activeLink : ''}` // Apply active class conditionally
                        }
                    >
                        <Dash className={'mx-2'} />
                        {link.title}
                    </NavLink>
                ))}
            </NavItemTree>
        </div>
    );
};

