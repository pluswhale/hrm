import { FC, ReactElement } from 'react';
import { AppealHeaderProps } from './types';
import styles from './appeal-header.module.scss';

export const AppealHeader: FC<AppealHeaderProps> = ({ title }): ReactElement => {
    return (
        <div className={styles.appeal_header}>
            <h3 className={styles.appeal_header__title}>{title}</h3>
        </div>
    );
};

