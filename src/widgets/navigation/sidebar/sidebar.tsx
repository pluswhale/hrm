import React, { useEffect } from "react";
import { Dash } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";
import styles from "./sidebar.module.scss";
import {NavItemTree} from "../../../features/nav-item-tree";

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
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
            <div className={styles.sidebar__wrapper}>

                <div className={styles.sidebar__container}>
                    <div className={styles.sidebar__wrapper_btn}>
                    {isMobile && (
                        <button className={styles.sidebar__closeButton} onClick={handleCloseClick}>
                            <X className={styles.sidebar__closeIcon} />
                        </button>
                    )}
                    </div>

                    <h2>
                        <a href="/" className={styles.sidebar__text}>
                            HRM
                        </a>
                    </h2>
                </div>
                <div className={styles.sidebar__nav}>
                    <NavItemTree title={"Компания"} className={styles.sidebar__navLink}>
                        <a href="/employees" className={styles.sidebar__navLink_text} onClick={handleLinkClick}>
                            <Dash className={"mx-2"} />
                            Сотрудники
                        </a>
                        <a href="/request" className={styles.sidebar__navLink_text} onClick={handleLinkClick}>
                            <Dash className={"mx-2"} />
                            Запросы
                        </a>
                        <a href="/survey" className={styles.sidebar__navLink_text} onClick={handleLinkClick}>
                            <Dash className={"mx-2"} />
                            Опросы
                        </a>
                    </NavItemTree>
                    <NavItemTree title={"Подбор персонала"} className={styles.sidebar__navLink}>
                        <a href="/vacancies" className={styles.sidebar__navLink_text} onClick={handleLinkClick}>
                            <Dash className={"mx-2"} />
                            Вакансии
                        </a>
                        <a href="#" className={styles.sidebar__navLink_text} onClick={handleLinkClick}>
                            <Dash className={"mx-2"} />
                            Набор на практику
                        </a>
                        <a href="candidates" className={styles.sidebar__navLink_text} onClick={handleLinkClick}>
                            <Dash className={"mx-2"} />
                            Кандидаты
                        </a>
                    </NavItemTree>
                </div>
            </div>
            <button className={styles.sidebar__button}>Перейти в Astrum</button>
        </div>
    );
};
