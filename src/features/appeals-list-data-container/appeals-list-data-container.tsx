import { FC, ReactElement } from 'react';
import { AppealsDataContainerProps } from './types';

import { PracticeCard } from 'entities/practise-items/practice-card/practice-card';

export const AppealsDataContainer: FC<AppealsDataContainerProps> = ({ appeals }): ReactElement => {
    return (
        <>
            {appeals?.length ? (
                appeals?.map((appeal) => (
                    <PracticeCard
                        key={appeal?.id}
                        navigationUrl={`/appeals/${appeal?.id}`}
                        title={appeal?.title}
                        created_at={appeal?.created_at}
                        deadline={appeal?.deadline}
                        seats={appeal.seats}
                        accepted={appeal?.accepted}
                        id={appeal?.id}
                        status={appeal?.status}
                    />
                ))
            ) : (
                <p>Нет практик</p>
            )}
        </>
    );
};

