import { FC, ReactElement } from 'react';
import styles from './appeal-competences-block.module.scss';
import { AppealCompetencesBlockProps } from './types';

export const AppealCompetencesBlock: FC<AppealCompetencesBlockProps> = ({ competences }): ReactElement => {
    return (
        <div className={styles.appeal_competences}>
            <div className={styles.appeal_competences__card_wrapper}>
                <h4 className={styles.appeal_competences__title}>Ключевые навыки</h4>
                <div className={styles.appeal_competences__card_wrapper__content}>
                    <div className={styles.appeal_competences__row}>
                        {competences &&
                            competences?.map((competence: any) => (
                                <span key={competence?.id} className={styles.appeal_competences__row_value}>
                                    {competence?.name}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

