import { FC, ReactElement } from 'react';
import styles from './survey-description.module.scss';
import { SurveyDescriptionProps } from './types';

export const SurveyDescription: FC<SurveyDescriptionProps> = ({ title, content }): ReactElement => {
    return (
        <div className={styles.survey_description}>
            <div className={styles.survey_description__card_wrapper}>
                <h4 className={styles.survey_description__title}>{title}</h4>
                <div className={styles.survey_description__card_wrapper__content}>
                    {content && <span className={styles.survey_description__card_wrapper__element}>{content}</span>}
                </div>
            </div>
        </div>
    );
};

