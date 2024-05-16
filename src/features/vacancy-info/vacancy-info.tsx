import { FC, ReactElement } from 'react';
import { VacancyInfoProps } from './types';
import { VacancyHeader } from '../../entities/vacancy-items/vacancy-header';
import { VacancyDescriptionCard } from '../../entities/vacancy-items/vacancy-description-card';

import styles from './vacancy-info.module.scss';

export const VacancyInfo: FC<VacancyInfoProps> = ({ vacancy }): ReactElement => {
    return (
        <>
            <VacancyHeader
                title={vacancy?.name}
                createdAt={vacancy?.createdAt}
                deadline={vacancy?.expiredAt}
                preferredIncome={vacancy?.salary}
            />
            <div className={styles.vacancy_description}>
                <VacancyDescriptionCard title="Описание вакансии" content={vacancy?.description?.split(';')} />
                <VacancyDescriptionCard title="Требования к кандидату" content={vacancy?.description?.split(';')} />
            </div>
        </>
    );
};

