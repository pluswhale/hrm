import { FC, ReactElement } from 'react';
import { StandardInfoBlockProps } from './types';

import styles from './standard-info-block.module.scss';

export const StandardInfoBlock: FC<StandardInfoBlockProps> = ({ title, rows }): ReactElement => {
    return (
        <div className={styles.standard_info_block}>
            <h2 className={styles.standard_info_block__title}>{title}</h2>
            <div className={styles.standard_info_block__container}>
                {rows?.map((row, index) => (
                    <span key={index} className={styles.standard_info_block__row_title}>
                        {row.label}
                        <span className={styles.standard_info_block__row_value}>{row.value}</span>
                    </span>
                ))}
            </div>
        </div>
    );
};
