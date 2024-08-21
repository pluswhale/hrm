import { List } from 'react-bootstrap-icons';
import burger from '../../../assets/Бургер.svg';
import style from './header.module.scss';
import notificationsIcon from '../../../assets/notification_icon.svg';
import { Outlet } from 'react-router-dom';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchNotifications } from 'shared/api/notifications/thunks';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import Notifications from 'widgets/notifications/notifications';
import { useState } from 'react';
import fakeAvatar from '../../../assets/Ellipse 1.svg';

type HeaderProps = {
    toggleSidebar: () => void;
    isMobile: boolean;
    isOpen: boolean;
    closeSidebar: () => void;
};

export const Header = ({ toggleSidebar, isMobile, isOpen, closeSidebar }: HeaderProps) => {
    const userData = useSelector(userDataSelector);
    const [openNotifications, setOpenNotifications] = useState<boolean>(false);

    const queryParams = {
        queryKey: 'fetchNotifications',
        queryThunk: fetchNotifications,
        queryThunkOptions: {
            type: userData?.role === 'HRManager' ? 'hrManager' : 'employee',
            id: userData?.id,
        },
        refetchInterval: 1000,
    } as QueryParameters<any>;

    const notificationsQuery = useFetchData(queryParams);

    const isUnseenNotifications = notificationsQuery?.data?.some((notification: any) => !notification.is_seen);

    const handleContainerClick = () => {
        if (isOpen && isMobile) {
            closeSidebar();
        }
    };

    const handleBurgerClick = () => {
        if (isOpen) {
            closeSidebar();
        } else {
            toggleSidebar();
        }
    };

    return (
        <>
            <nav className={`${style.container} ${isOpen ? style.container__with_sidebar : ''}`}>
                <div className={style.container__wrapper}>
                    {/* {isMobile && <List className={style.container__burger} onClick={handleBurgerClick} />} */}
                    <div className={style.container__burger}>
                        <img
                            className={style.container__burger_icon}
                            src={burger}
                            alt="burger"
                            onClick={handleBurgerClick}
                        />
                    </div>
                    <div className={style.container__profile}>
                        <button
                            onClick={() => setOpenNotifications((prev) => !prev)}
                            className={style.container__button}
                        >
                            <div className={style.notification_wrapper}>
                                <img
                                    className={style.notification_icon}
                                    src={notificationsIcon}
                                    alt="notification icon"
                                />
                                {isUnseenNotifications && <div className={style.notification_badge}></div>}
                            </div>

                            {openNotifications ? (
                                <Notifications
                                    notifications={notificationsQuery?.data}
                                    setOpenNotifications={setOpenNotifications}
                                />
                            ) : null}
                        </button>
                        <a href="#" className={style.container__img}>
                            <img
                                src={fakeAvatar}
                                style={{ borderRadius: '100px', height: '58px', width: '58px∂' }}
                                alt="avatar"
                            />
                        </a>
                    </div>
                </div>
            </nav>
            <div className={`${isOpen ? style.container__with_sidebar : ''}`} onClick={handleContainerClick}>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

