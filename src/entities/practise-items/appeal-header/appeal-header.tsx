import { FC, ReactElement } from 'react';
import { AppealHeaderProps } from './types';
import styles from './appeal-header.module.scss';

export const AppealHeader: FC<AppealHeaderProps> = ({ title, createdAt, deadline, seats, accepted }): ReactElement => {
    return (
        <div className={styles.appeal_header}>
            <h3 className={styles.appeal_header__title}>{title}</h3>

            <div className={styles.appeal_header__row}>
                <span className={styles.appeal_header__row_label}>Создана:</span>
                <span className={styles.appeal_header__row_value}>{createdAt}</span>
            </div>

            <div className={styles.appeal_header__row}>
                <span className={styles.appeal_header__row_label}>Дедлайн:</span>
                <span className={styles.appeal_header__row_value}>{deadline}</span>
            </div>

            <div className={styles.appeal_header__row}>
                <span className={styles.appeal_header__row_label}>Места:</span>
                <span className={styles.appeal_header__row_value}>{seats}</span>
            </div>

            <div className={styles.appeal_header__row}>
                <span className={styles.appeal_header__row_label}>Принято:</span>
                <span className={styles.appeal_header__row_value}>{accepted}</span>
            </div>
        </div>
    );
};

