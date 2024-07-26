import { FC, ReactElement } from 'react';
import { AppealInfoProps } from './types';

import { AppealHeader } from 'entities/practise-items/appeal-header';
import { AppealDescriptionCard } from 'entities/practise-items/appeal-description-card';

import styles from './appeal-info.module.scss';
import { AppealAboutBlock } from 'entities/practise-items/appeal-about-block';
import { AppealCompetencesBlock } from 'entities/practise-items/appeal-competences-block';

export const AppealInfo: FC<AppealInfoProps> = ({ appeal }): ReactElement => {
    const appealDescriptionRows = [
        { id: 1, title: 'Обязанности', data: appeal?.responsibilities?.split(';') },
        { id: 2, title: 'Требования', data: appeal?.requirements?.split(';') },
    ];
    return (
        <>
            <AppealHeader title={appeal?.name} />
            <div className={styles.appeal_description}>
                <div className={styles.appeal_description__vertical_block}>
                    <AppealAboutBlock appealData={appeal} />
                    <AppealCompetencesBlock competences={appeal?.competences} />
                </div>
                <AppealDescriptionCard title="Описание вакансии для кандидата" content={appealDescriptionRows} />
            </div>
        </>
    );
};

