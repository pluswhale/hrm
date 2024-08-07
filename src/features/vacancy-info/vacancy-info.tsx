import { FC, ReactElement } from 'react';
import { VacancyInfoProps } from './types';
import { VacancyHeader } from '../../entities/vacancy-items/vacancy-header';
import { VacancyDescriptionCard } from '../../entities/vacancy-items/vacancy-description-card';

import styles from './vacancy-info.module.scss';
import { VacancyAboutBlock } from 'entities/vacancy-items/vacancy-about-block';
import { VacancyCompetencesBlock } from 'entities/vacancy-items/vacancy-competences-block/vacancy-competences-block';

export const VacancyInfo: FC<VacancyInfoProps> = ({ vacancy }): ReactElement => {
    const vacancyDescriptionRows = [
        { id: 1, title: 'Обязанности', data: vacancy?.responsibilities?.split(';') || [] },
        { id: 2, title: 'Требования', data: vacancy?.requirements?.split(';') || [] },
        { id: 3, title: 'Условия', data: vacancy?.description?.split(';') || [] },
    ];

    return (
        <>
            <VacancyHeader title={vacancy?.name} />
            <div className={styles.vacancy__description}>
                <div className={styles.vacancy__vertical_block}>
                    <VacancyAboutBlock vacancyData={vacancy} />
                    <VacancyCompetencesBlock competences={vacancy?.competences} />
                </div>
                <VacancyDescriptionCard title="Описание вакансии для кандидата" content={vacancyDescriptionRows} />
            </div>
        </>
    );
};

