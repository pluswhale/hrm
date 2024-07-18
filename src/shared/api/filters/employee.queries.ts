import { QueryParameters } from 'shared/hooks/useFetchData';
import { fetchKeySkillsFilterSet, fetchPositionsFilterSet } from './employee.thunks';

export const queryParametersForPositionsEmployeeFilterSet = {
    queryKey: 'fetchPositionsForEmployeesFilterSet',
    queryThunk: fetchPositionsFilterSet,
} as QueryParameters<any>;

export const queryParametersForKeySkillsEmployeeFilterSet = {
    queryKey: 'fetchKeySkillsForEmployeesFilterSet',
    queryThunk: fetchKeySkillsFilterSet,
} as QueryParameters<any>;

