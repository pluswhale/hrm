import { FC, ReactElement } from 'react';
import { AppealInfoProps } from './types';

import { AppealHeader } from 'entities/practise-items/appeal-header';
import { AppealDescriptionCard } from 'entities/practise-items/appeal-description-card';

import styles from './appeal-info.module.scss';

export const AppealInfo: FC<AppealInfoProps> = ({ appeal }): ReactElement => {
    return (
        <>
            <AppealHeader
                title={appeal.title}
                createdAt={appeal.created_at}
                deadline={appeal.deadline}
                seats={appeal.seats}
                accepted={appeal.accepted}
            />
            <div className={styles.appeal_description}>
                <AppealDescriptionCard title="Описание направления практики" content={appeal.description} />
                <AppealDescriptionCard title="Требования к кандидату" content={appeal.requirements} />
            </div>
        </>
    );
};

