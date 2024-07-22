import { FC, ReactElement } from 'react';
import { HeaderBlockProps } from './types';

import styles from './header-block.module.scss';
import dayjs from 'dayjs';

export const HeaderBlock: FC<HeaderBlockProps> = ({ name, avatar, birthday_date, home_address }): ReactElement => {
    const birthDate = dayjs(birthday_date);
    const currentDate = dayjs();
    const age = currentDate.diff(birthDate, 'year');

    let ageWord;
    if (age % 10 === 1 && age % 100 !== 11) {
        ageWord = 'год';
    } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
        ageWord = 'года';
    } else {
        ageWord = 'лет';
    }

    const formattedStartDate = dayjs(birthday_date).format('DD.MM.YYYY');
    return (
        <div className={styles.header_block}>
            <img className={styles.header_block__img} src={avatar} alt="logo" />
            <div className={styles.header_block__container}>
                <h2 className={styles.header_block__name}>{name}</h2>
                <span className={styles.header_block__profession}>
                    {age} {ageWord}, родилась {formattedStartDate}
                </span>
                <span className={styles.header_block__profession}>{home_address}</span>
            </div>
        </div>
    );
};

