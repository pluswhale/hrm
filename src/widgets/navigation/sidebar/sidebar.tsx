import { useEffect } from 'react';
import { X } from 'react-bootstrap-icons';
import styles from './sidebar.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import { HRManagerSet } from './nav-sets/hr-manager/hr-manager-set';
import { EmployeeSet } from './nav-sets/employee/employee-set';

type SidebarProps = {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    isMobile: boolean;
    closeSidebar: () => void;
};

export const Sidebar = ({ isOpen, setOpen, isMobile, closeSidebar }: SidebarProps) => {
    const userRole = useSelector(userDataSelector)?.role;

    useEffect(() => {
        if (isMobile) {
            setOpen(false);
        }
    }, [isMobile, setOpen]);

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

                    {userRole === 'HRManager' ? <HRManagerSet /> : <EmployeeSet />}
                </div>
            </div>
            <button className={styles.sidebar__button}>Перейти в Astrum</button>
        </div>
    );
};

