import style from './candidates-list.module.scss';
import { CandidatesDataContainer } from '../../features/candidates-data-container';
import { Filter } from '../../features/filter';
import { filterSet } from './constants';
import { FC, ReactElement, useState } from 'react';
import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCandidates } from 'shared/api/candidates/thunks';

const CandidatesList: FC = (): ReactElement => {
    const [searchValue, setSearchValue] = useState<string>('');
    const queryParameters = {
        queryKey: 'fetchAllCandidates',
        queryThunk: fetchAllCandidates,
    } as QueryParameters<any>;

    const candidatesQuery = useFetchData(queryParameters);

    const onSearchData = (value: string) => {
        setSearchValue(value); // Update search value state
    };

    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                <h5 className={style.container__title}>Кандидаты</h5>
                <div className={style.container__wrapper}>
                    <CandidatesDataContainer
                        candidates={candidatesQuery?.data?.filter((candidate: any) =>
                            candidate?.firstName?.toLowerCase().includes(searchValue.toLowerCase()),
                        )}
                    />
                    <Filter
                        value={searchValue}
                        onChangeValue={onSearchData}
                        title="Найти кандидата"
                        filterSet={filterSet}
                        onClickSearch={() => console.log('заглушка')}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default CandidatesList;

