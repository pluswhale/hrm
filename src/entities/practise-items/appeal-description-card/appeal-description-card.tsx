import { FC, ReactElement } from 'react';
import styles from './appeal-description-card.module.scss';
import { AppealDescriptionCardProps } from './types';

export const AppealDescriptionCard: FC<AppealDescriptionCardProps> = ({ title, content }): ReactElement => {
    return (
        <div className={styles.appeal_description}>
            <div className={styles.appeal_description__card_wrapper}>
                <h4 className={styles.appeal_description__title}>{title}</h4>
                <ul className={styles.appeal_description__card_wrapper__content}>
                    {content &&
                        content.map((row) => (
                            <div className={styles.appeal_description__row}>
                                <span className={styles.appeal_description__row_title}>{row.title}</span>
                                {row?.data?.map((text: any) => (
                                    <span className={styles.appeal_description__row_value}>{row.title}</span>
                                ))}
                            </div>
                        ))}
                </ul>
            </div>
        </div>
    );
};

