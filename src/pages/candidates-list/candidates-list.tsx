import style from './candidates-list.module.scss';
import { CandidatesDataContainer } from '../../features/candidates-data-container';
import { Filter } from '../../features/filter';
import { candidatesListData, filterSet } from './constants';
import { FC, ReactElement, useEffect, useState } from 'react';
import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCandidates } from 'shared/api/candidates/thunks';
import { log } from 'console';
import { useSelector } from 'react-redux';
import { rolesInFilterSelector, skillsInFilterSelector } from '../../redux/selectors/filter';
import { useAppDispatch } from '../../redux/store';
import { setFilters } from '../../redux/slices/filter';

const CandidatesList: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>('');
    const skillsForFilter = useSelector(skillsInFilterSelector);
    const rolesForFilter = useSelector(rolesInFilterSelector);

    const queryParameters = {
        queryKey: 'fetchAllCandidates',
        queryThunk: fetchAllCandidates,
    } as QueryParameters<any>;

    // const candidatesQuery = useFetchData(queryParameters);

    const onSearchData = (value: string) => {
        setSearchValue(value); // Update search value state
    };

    const rolesForFilterFromData = candidatesListData.candidates.map((candidate, index: number) => ({
        id: index + 1,
        name: candidate.role,
        isActive: false,
    }));

    const skillsForFilterFromData: { id: number; name: string; isActive: boolean }[] = [];

    candidatesListData.candidates.forEach((candidate, index: number) => {
        candidate.skills.forEach((skill, index) => {
            skillsForFilterFromData.push({ id: index + 1, name: skill, isActive: false });
        });
    });

    useEffect(() => {
        dispatch(setFilters({ roles: rolesForFilterFromData, skills: skillsForFilterFromData }));
    }, []);

    const filteredData = () => {
        if (searchValue) {
            return candidatesListData?.candidates?.filter((candidate: any) =>
                candidate?.name?.toLowerCase().includes(searchValue.toLowerCase()),
            );
        } else {
            return candidatesListData?.candidates?.filter((candidate: any) =>
                candidate?.name?.toLowerCase().includes(searchValue.toLowerCase()),
            );
        }
    };

    const dataIntoFilter = filterSet.map((filterRow) => {
        if (filterRow.id === 1) {
            return { ...filterRow, checkboxes: rolesForFilter };
        } else {
            return { ...filterRow, checkboxes: skillsForFilter };
        }
    });

    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                <h5 className={style.container__title}>Кандидаты</h5>
                <div className={style.container__wrapper}>
                    <CandidatesDataContainer candidates={filteredData()} />
                    <Filter
                        value={searchValue}
                        onChangeValue={onSearchData}
                        title="Найти кандидата"
                        filterSet={dataIntoFilter}
                        onClickSearch={() => console.log('заглушка')}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default CandidatesList;

