import { useEffect, useState } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Outlet } from 'react-router-dom';
import styles from './navigation.module.scss';

export const Navigation = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isMobile, setMobileTheme] = useState<boolean>(false);


    const toggleSidebar = () => {
        setOpen((prevState) => !prevState);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={styles.container__wrapeper}>
                <Header toggleSidebar={toggleSidebar} isMobile={isMobile} isOpen={isOpen} closeSidebar={closeSidebar}/>
                <Sidebar isOpen={isOpen} setOpen={setOpen} isMobile={isMobile} closeSidebar={closeSidebar} />
            </div>
        </>
    );
};

