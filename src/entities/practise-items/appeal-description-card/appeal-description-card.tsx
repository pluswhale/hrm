import { FC, ReactElement } from 'react';
import styles from './appeal-description-card.module.scss';
import { AppealDescriptionCardProps } from './types';

export const AppealDescriptionCard: FC<AppealDescriptionCardProps> = ({ title, content }): ReactElement => {
    return (
        <div className={styles.appeal_description}>
            <h4 className={styles.appeal_description__title}>{title}</h4>

            <div className={styles.appeal_description__card_wrapper}>
                <ul className={styles.appeal_description__card_wrapper__content}>
                    {content &&
                        content.map((row) => (
                            <li className={styles.appeal_description__card_wrapper__element}>{row}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

