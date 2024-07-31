import { FC, ReactElement, useEffect, useState } from 'react';
import SwitchTab from '../../../shared/components/switch-tab/switch-tab';
import { EmployeesDataContainer } from '../../../features/employees-list-data-container';
import { Filter } from '../../../features/filter';
import { filterSet } from './constants';

import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { useSelector } from 'react-redux';
import { rolesInFilterSelector, skillsInFilterSelector } from '../../../redux/selectors/filter';
import { setFilters, setToggleCheckboxInFilter } from '../../../redux/slices/filter';
import { useAppDispatch } from '../../../redux/store';

import style from './employees-list.module.scss';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllEmployees } from 'shared/api/employees/thunks';

import parseUriParams from 'shared/libs/parseUriParams';
import {
    queryParametersForKeySkillsEmployeeFilterSet,
    queryParametersForPositionsEmployeeFilterSet,
} from 'shared/api/filters/filters.queries';

export const EmployeesList: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const params = parseUriParams(window.location.href);
    const tabs = [{ label: 'Текущие сотрудники' }, { label: 'Бывшие сотрудники' }];
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');
    const skillsForFilter = useSelector(skillsInFilterSelector);
    const rolesForFilter = useSelector(rolesInFilterSelector);
    const positionsFilterSet = useFetchData(queryParametersForPositionsEmployeeFilterSet);
    const keySkillsFilterSet = useFetchData(queryParametersForKeySkillsEmployeeFilterSet);

    useEffect(() => {
        if (params?.status) {
            params.status === 'dismissed' ? setActiveTab(1) : setActiveTab(0);
        }
    }, [params?.status]);

    const queryParameters = {
        queryKey: 'fetchAllEmployees',
        queryThunk: fetchAllEmployees,
        queryThunkOptions: {
            status: activeTab === 0 ? 'current' : 'dismissed',
            search: searchValue || undefined,
            keySkills: getCurrentActiveKeySkillsIds(),
            positions: getCurrentActivePositionsIds(),
        },
    } as QueryParameters<any>;

    const employeesQuery = useFetchData(queryParameters);

    useEffect(() => {
        dispatch(
            setFilters({
                roles: positionsFilterSet?.data?.map((positions: any) => ({ ...positions, isActive: false })),
                skills: keySkillsFilterSet?.data?.map((keySkills: any) => ({ ...keySkills, isActive: false })),
            }),
        );
    }, [dispatch, keySkillsFilterSet?.data, positionsFilterSet?.data]);

    const filterRowsData = filterSet.map((filterRow) => {
        if (filterRow.id === 1) {
            return { ...filterRow, checkboxes: rolesForFilter };
        } else {
            return { ...filterRow, checkboxes: skillsForFilter };
        }
    });

    function getCurrentActiveKeySkillsIds(): string | null {
        const activeSkills = skillsForFilter
            ?.map((skills) => (skills.isActive ? skills.id : null))
            .filter(Boolean)
            .join(',');
        return activeSkills?.length ? activeSkills : null;
    }

    function getCurrentActivePositionsIds(): string | null {
        const activePositions = rolesForFilter
            ?.map((role) => (role.isActive ? role.id : null))
            .filter(Boolean)
            .join(',');
        return activePositions?.length ? activePositions : null;
    }

    const onToggleCheckboxInFilter = (filterSetName: string, checkboxId: number) => {
        dispatch(setToggleCheckboxInFilter({ filterSetName, checkboxId }));
    };

    return (
        <DefaultContentWrapper>
            <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
            <div className={style.main_content}>
                <EmployeesDataContainer employees={employeesQuery?.data} />
                <Filter
                    searchValue={searchValue}
                    onChangeSearchValue={setSearchValue}
                    onToggleCheckboxInFilter={onToggleCheckboxInFilter}
                    title="Поиск кандидата"
                    filterSet={filterRowsData}
                />
            </div>
        </DefaultContentWrapper>
    );
};

