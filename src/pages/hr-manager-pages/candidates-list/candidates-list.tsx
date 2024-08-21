import style from './candidates-list.module.scss';
import { CandidatesDataContainer } from '../../../features/candidates-data-container';
import { Filter } from '../../../features/filter';
import { filterSet } from './constants';
import { FC, ReactElement, useEffect, useState } from 'react';
import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { useSelector } from 'react-redux';
import { rolesInFilterSelector, skillsInFilterSelector } from '../../../redux/selectors/filter';
import { useAppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router';
import { Button } from 'shared/components/button/button';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCandidates } from 'shared/api/candidates/thunks';
import { setFilters, setToggleCheckboxInFilter } from '../../../redux/slices/filter';
import {
    queryParametersForCompetencesInCandidatesFilterSet,
    queryParametersForCountByTypeInCandidatesFilterSet,
} from 'shared/api/filters/filters.queries';
import { Candidate } from 'shared/types/candidate.type';
import { useMediaQuery } from 'react-responsive';
import { MobilePageHeader } from 'widgets/mobile-page-header/mobile-page-header';

const CandidatesList: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

    const [searchValue, setSearchValue] = useState<string>('');
    const competencesForFilter = useSelector(skillsInFilterSelector);
    const typesForFilter = useSelector(rolesInFilterSelector);
    const competencesFilterSet = useFetchData(queryParametersForCompetencesInCandidatesFilterSet);
    const countByTypeFilterSet = useFetchData(queryParametersForCountByTypeInCandidatesFilterSet);

    const queryParameters = {
        queryKey: 'fetchAllCandidates',
        queryThunk: fetchAllCandidates,
        queryThunkOptions: {
            search: searchValue || undefined,
            competences: getCurrentActiveCompetencesIds(),
            type: getCurrentType(),
        },
    } as QueryParameters<Candidate[]>;

    const candidatesQuery = useFetchData(queryParameters);

    useEffect(() => {
        if (countByTypeFilterSet?.data) {
            dispatch(
                setFilters({
                    //@ts-ignore
                    roles: Object.entries(countByTypeFilterSet?.data).map(([key, value], index: number) => {
                        return {
                            id: index + 1,
                            title: key === 'vacancy' ? 'Вакансии' : 'Практика',
                            count: value,
                            isActive: false,
                            value: key,
                        };
                    }),
                    skills: competencesFilterSet?.data?.map((keySkills: any) => ({ ...keySkills, isActive: false })),
                }),
            );
        }
    }, [dispatch, competencesFilterSet?.data, countByTypeFilterSet?.data]);

    const filterRowsData = filterSet.map((filterRow) => {
        if (filterRow.id === 1) {
            return { ...filterRow, checkboxes: typesForFilter };
        } else {
            return { ...filterRow, checkboxes: competencesForFilter };
        }
    });

    function getCurrentActiveCompetencesIds(): string | null {
        const activeCompetences = competencesForFilter
            ?.map((competence) => (competence.isActive ? competence.id : null))
            .filter(Boolean)
            .join(',');
        return activeCompetences?.length ? activeCompetences : null;
    }

    function getCurrentType(): string | null {
        const activeType = typesForFilter
            ?.map((type) => (type.isActive ? type.value : null))
            .filter(Boolean)
            .join(',');
        return activeType?.length ? activeType : null;
    }

    const onToggleCheckboxInFilter = (filterSetName: string, checkboxId: number) => {
        dispatch(setToggleCheckboxInFilter({ filterSetName, checkboxId }));
    };

    const onNavigateToCreateVacancy = () => {
        navigate('/create/candidate');
    };

    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                {!isMobile ? (
                    <div className={style.action_buttons}>
                        <h5 className={style.container__title}>Кандидаты</h5>
                        <Button
                            onClick={onNavigateToCreateVacancy}
                            styles={{ width: 'fit-content' }}
                            text="Создать кандидата"
                            view="default_bg"
                        />
                    </div>
                ) : null}
                {isMobile ? (
                    <MobilePageHeader
                        titlePage={'Кандидаты'}
                        filter={
                            <Filter
                                searchValue={searchValue}
                                onChangeSearchValue={setSearchValue}
                                onToggleCheckboxInFilter={onToggleCheckboxInFilter}
                                title="Поиск кандидата"
                                filterSet={filterRowsData}
                            />
                        }
                        searchValue={searchValue}
                        onChangeSearchValue={setSearchValue}
                    />
                ) : null}
                <div className={style.container__wrapper}>
                    {isMobile ? (
                        <Button
                            onClick={onNavigateToCreateVacancy}
                            styles={{ width: 'fit-content' }}
                            text="Создать кандидата"
                            view="default_bg"
                        />
                    ) : null}
                    {candidatesQuery?.data && <CandidatesDataContainer candidates={candidatesQuery?.data} />}
                    {!isMobile ? (
                        <Filter
                            searchValue={searchValue}
                            onChangeSearchValue={setSearchValue}
                            onToggleCheckboxInFilter={onToggleCheckboxInFilter}
                            title="Поиск кандидата"
                            filterSet={filterRowsData}
                        />
                    ) : null}
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default CandidatesList;

