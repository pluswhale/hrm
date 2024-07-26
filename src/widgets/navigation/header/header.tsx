import { Image } from 'react-bootstrap';
import { Bell, List } from 'react-bootstrap-icons';
import burger from '../../../assets/Бургер.svg';
import style from './header.module.scss';
import { Outlet } from 'react-router-dom';

type HeaderProps = {
    toggleSidebar: () => void;
    isMobile: boolean;
    isOpen: boolean;
    closeSidebar: () => void; // Добавляем функцию для закрытия боковой панели
};

export const Header = ({ toggleSidebar, isMobile, isOpen, closeSidebar }: HeaderProps) => {
    const handleBurgerClick = () => {
        if (isOpen) {
            closeSidebar(); // Если боковая панель открыта, закрываем ее
        } else {
            toggleSidebar(); // Иначе открываем боковую панель
        }
    };

    const handleContainerClick = () => {
        if (isOpen && isMobile) {
            closeSidebar(); // Если боковая панель открыта и мобильное устройство, закрываем ее при клике на контейнер Header
        }
    };

    return (
        <>
            <nav className={`${style.container} ${isOpen ? style.container__with_sidebar : ''}`}>
                <div className={style.container__wrapper}>
                    {isMobile && <List className={style.container__burger} onClick={handleBurgerClick} />}
                    <div className={style.container__burger}>
                        <img
                            className={style.container__burger_icon}
                            src={burger}
                            alt="burger"
                            onClick={handleBurgerClick}
                        />
                    </div>
                    <div className={style.container__profile}>
                        <button className={style.container__button}>
                            <Bell height={24} width={24} />
                        </button>
                        <a href="#" className={style.container__img}>
                            <Image
                                roundedCircle
                                src={'https://github.com/mdo.png'}
                                style={{ borderRadius: '100px' }}
                                height={58}
                                width={58}
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

