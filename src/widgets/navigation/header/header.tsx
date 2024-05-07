import React from "react";
import { Image } from "react-bootstrap";
import { Bell, List } from "react-bootstrap-icons";
import style from './header.module.scss';
import burger from '../../../assets/Бургер.svg';

type HeaderProps = {
    toggleSidebar: () => void;
    isMobile: boolean;
}

export const Header = ({ toggleSidebar, isMobile }: HeaderProps) => {
    const handleClick: React.MouseEventHandler<SVGElement> = (e) => {
        e.stopPropagation();
        toggleSidebar();
    };

    return (
        <>
            <nav className={style.container}>
                <div className={style.container__wrapper}>
                    {isMobile && <List className={""} onClick={handleClick} />}
                    <div className={style.container__burger}>
                        <img src={burger} alt='burger' />
                    </div>
                    <div className={style.container__profile}>
                        <button className={style.container__button}><Bell height={24} width={24} /></button>
                        <a href="#" className={style.container__img}>
                            <Image roundedCircle src={"https://github.com/mdo.png"} style={{borderRadius: '100px'}} height={58} width={58} />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
