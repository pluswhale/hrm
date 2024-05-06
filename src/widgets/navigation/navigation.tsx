import { useEffect, useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";
import styles from "./navigation.module.scss";

export const Navigation = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isMobile, setMobileTheme] = useState<boolean>(false);

    useEffect(() => {
        setMobileTheme(() => window.innerWidth <= 1024);
        if (window.innerWidth <= 1024) {
            setOpen(false); // Закрываем боковую панель при загрузке страницы, если isMobile === true
        }

        const handleResize = () => {
            setMobileTheme(() => window.innerWidth <= 1024);
            if (window.innerWidth <= 1024) {
                setOpen(false); // Закрываем боковую панель при изменении размера экрана, если isMobile === true
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setOpen((prevState) => !prevState);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} setOpen={setOpen} isMobile={isMobile} closeSidebar={closeSidebar} />
            <div
                className={`${styles.scrollArea} ${styles.mainContent}`}
                onClick={closeSidebar}
            >
                <Header toggleSidebar={toggleSidebar} isMobile={isMobile} />
                <div className={"text-light"}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};
