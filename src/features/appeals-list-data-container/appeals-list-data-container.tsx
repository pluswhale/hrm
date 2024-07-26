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
                        navUrl={`/appeals/${appeal?.id}`}
                        name={appeal?.name}
                        created_at={appeal?.created_at}
                        deadline={appeal?.deadline}
                        desired_count_candidates={appeal.desired_count_candidates}
                        id={appeal?.id}
                        is_active={appeal?.is_active}
                    />
                ))
            ) : (
                <p>Нет практик</p>
            )}
        </>
    );
};

