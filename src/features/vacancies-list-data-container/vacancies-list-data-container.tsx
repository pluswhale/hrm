import { FC, ReactElement } from 'react';
import { VacanciesDataContainerProps } from './types';

import { VacancyCard } from 'entities/vacancy-items/vacancy-card/vacancy-card';

export const VacanciesDataContainer: FC<VacanciesDataContainerProps> = ({ vacancies }): ReactElement => {
    return (
        <>
            {vacancies?.length ? (
                vacancies?.map((vacancy) => (
                    <VacancyCard
                        key={vacancy?.id}
                        navigationUrl={`/vacancies/${vacancy.id}`}
                        title={vacancy?.name}
                        created_at={vacancy?.created_at}
                        deadline={vacancy?.deadline}
                        candidatesCount={vacancy?.candidates?.length}
                        id={vacancy?.id}
                        status={vacancy?.status}
                    />
                ))
            ) : (
                <p>Нет вакансий</p>
            )}
        </>
    );
};

