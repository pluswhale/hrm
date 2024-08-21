import { FC, ReactElement } from 'react';
import { HeaderBlockProps } from './types';

import editIcon from '../../../assets/Редактировать.svg';

import styles from './header-block.module.scss';
import dayjs from 'dayjs';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate, useParams } from 'react-router';

export const HeaderBlock: FC<HeaderBlockProps> = ({
    isDisplayAge,
    name,
    avatar,
    birthday_date,
    home_address,
    profession,
    gender,
}): ReactElement => {
    const birthDate = dayjs(birthday_date);
    const currentDate = dayjs();
    const age = currentDate.diff(birthDate, 'year');
    const isMobile = useMediaQuery({ query: '(max-width: 768px' });
    const location = useLocation();
    const navigate = useNavigate();
    const { id: userId } = useParams();

    let isDisplayEditIcon = isMobile && location.pathname.includes('candidates');

    let ageWord;
    if (age % 10 === 1 && age % 100 !== 11) {
        ageWord = 'год';
    } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
        ageWord = 'года';
    } else {
        ageWord = 'лет';
    }

    const formattedStartDate = dayjs(birthday_date).format('DD.MM.YYYY');

    const onNavigateToEditCandidate = () => {
        navigate('/edit/candidate/' + userId);
    };

    return (
        <div className={styles.header_block}>
            <img className={styles.header_block__img} src={avatar} alt="logo" />
            <div className={styles.header_block__container}>
                <h2 className={styles.header_block__name}>{name}</h2>
                {isDisplayAge && (
                    <span className={styles.header_block__profession}>
                        {age} {ageWord}, {gender === 'female' ? 'родилась' : 'родился'} {formattedStartDate}
                    </span>
                )}
                <span className={styles.header_block__profession}>{profession || home_address}</span>

                {isDisplayEditIcon && (
                    <img
                        onClick={onNavigateToEditCandidate}
                        className={styles.header_block__edit_icon}
                        src={editIcon}
                        alt="edit icon"
                    />
                )}
            </div>
        </div>
    );
};

