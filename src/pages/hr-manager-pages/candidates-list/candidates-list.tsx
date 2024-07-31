import style from './candidates-list.module.scss';
import { CandidatesDataContainer } from '../../../features/candidates-data-container';
import { Filter } from '../../../features/filter';
import { candidatesListData } from './constants';
import { FC, ReactElement, useState } from 'react';
import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { useSelector } from 'react-redux';
import { rolesInFilterSelector, skillsInFilterSelector } from '../../../redux/selectors/filter';
import { useAppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router';
import { Button } from 'shared/components/button/button';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCandidates } from 'shared/api/candidates/thunks';

const CandidatesList: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState<string>('');
    const skillsForFilter = useSelector(skillsInFilterSelector);
    const rolesForFilter = useSelector(rolesInFilterSelector);

    //query for candidates list
    const queryParameters = {
        queryKey: 'fetchAllCandidates',
        queryThunk: fetchAllCandidates,
        queryThunkOptions: {
            search: searchValue,
        },
    } as QueryParameters<any>;

    const candidatesQuery = useFetchData(queryParameters);

    const onSearchData = (value: string) => {
        setSearchValue(value); // Update search value state
    };

    const rolesForFilterFromData = candidatesListData.candidates.map((candidate, index: number) => ({
        id: index + 1,
        name: candidate.role,
        isActive: false,
    }));

    const onNavigateToCreateVacancy = () => {
        navigate('/create/candidate');
    };

    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                <div className={style.action_buttons}>
                    <h5 className={style.container__title}>Кандидаты</h5>
                    <Button
                        onClick={onNavigateToCreateVacancy}
                        styles={{ width: 'fit-content' }}
                        text="Создать кандидата"
                        view="default_bg"
                    />
                </div>
                <div className={style.container__wrapper}>
                    <CandidatesDataContainer candidates={candidatesQuery?.data} />
                    <Filter
                        searchValue={searchValue}
                        onChangeSearchValue={onSearchData}
                        title="Найти кандидата"
                        onToggleCheckboxInFilter={function (filterSetName: string, checkboxId: number): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default CandidatesList;

