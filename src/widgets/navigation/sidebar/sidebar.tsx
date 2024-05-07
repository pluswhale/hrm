import React, { useEffect } from 'react';
import { Dash } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';
import styles from './sidebar.module.scss';
import { NavItemTree } from '../../../features/nav-item-tree';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from './constants';

type SidebarProps = {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    isMobile: boolean;
    closeSidebar: () => void;
};

export const Sidebar = ({ isOpen, setOpen, isMobile, closeSidebar }: SidebarProps) => {
    useEffect(() => {
        if (isMobile) {
            setOpen(false);
        }
    }, [isMobile, setOpen]);

    const handleLinkClick = () => {
        closeSidebar();
    };

    const handleCloseClick = () => {
        closeSidebar();
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.sidebar__wrapper}>
                <div className={styles.sidebar__container}>
                    <div className={styles.sidebar__wrapper_btn}>
                        {isMobile && (
                            <button className={styles.sidebar__closeButton} onClick={handleCloseClick}>
                                <X className={styles.sidebar__closeIcon} />
                            </button>
                        )}
                    </div>

                    <Link to="/" className={styles.sidebar__logo}>
                        <h2 className={styles.sidebar__logo_text}>HRM</h2>
                    </Link>
                </div>
                <div className={styles.sidebar__nav}>
                    <NavItemTree title={'Компания'} className={styles.sidebar__navLink}>
                        {NAV_LINKS.company.map((link) => (
                            <Link
                                key={link.id}
                                to={link.url}
                                className={styles.sidebar__navLink_text}
                                onClick={handleLinkClick}
                            >
                                <Dash className={'mx-2'} />
                                {link.title}
                            </Link>
                        ))}
                    </NavItemTree>
                    <NavItemTree title={'Подбор персонала'} className={styles.sidebar__navLink}>
                        {NAV_LINKS.personal.map((link) => (
                            <Link
                                key={link.id}
                                to={link.url}
                                className={styles.sidebar__navLink_text}
                                onClick={handleLinkClick}
                            >
                                <Dash className={'mx-2'} />
                                {link.title}
                            </Link>
                        ))}
                    </NavItemTree>
                </div>
            </div>
            <button className={styles.sidebar__button}>Перейти в Astrum</button>
        </div>
    );
};

