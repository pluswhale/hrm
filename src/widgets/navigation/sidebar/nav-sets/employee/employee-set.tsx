import { NavItemTree } from 'features/nav-item-tree';
import styles from './employee-set.module.scss';
import { NAV_LINKS_FOR_EMPLOYEE } from '../../constants';
import { Link } from 'react-router-dom';
import { Dash } from 'react-bootstrap-icons';

export const EmployeeSet = () => {
    return (
        <div className={styles.sidebar__nav}>
            <div className={styles.sidebar__navLink_main}>
                {NAV_LINKS_FOR_EMPLOYEE?.main?.map((link) => (
                    <Link key={link.id} to={link.url} className={styles.sidebar__navLink_main_bold}>
                        {link.title}
                    </Link>
                ))}
            </div>

            <NavItemTree title={'Компания'} className={styles.sidebar__navLink}>
                {NAV_LINKS_FOR_EMPLOYEE?.company?.map((link) => (
                    <Link key={link.id} to={link.url} className={styles.sidebar__navLink_text}>
                        <Dash className={'mx-2'} />
                        {link.title}
                    </Link>
                ))}
            </NavItemTree>
        </div>
    );
};

