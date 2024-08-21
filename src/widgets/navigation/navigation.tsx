import { useEffect, useState } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Outlet } from 'react-router-dom';
import styles from './navigation.module.scss';
import { useMediaQuery } from 'react-responsive';

export const Navigation = () => {
    const [isOpen, setOpen] = useState<boolean>(true);
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

    useEffect(() => {
        setOpen(false);
    }, [isMobile]);

    const toggleSidebar = () => {
        setOpen((prevState) => !prevState);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={styles.container__wrapeper}>
                <Header toggleSidebar={toggleSidebar} isMobile={isMobile} isOpen={isOpen} closeSidebar={closeSidebar} />
                <Sidebar isOpen={isOpen} setOpen={setOpen} isMobile={isMobile} closeSidebar={closeSidebar} />
            </div>
        </>
    );
};

