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
                            <ul>
                                <span>{row.title}</span>
                                {row?.data?.map((text: any) => (
                                    <li className={styles.vacancy_description__card_wrapper__element}>{row.title}</li>
                                ))}
                            </ul>
                        ))}
                </ul>
            </div>
        </div>
    );
};

