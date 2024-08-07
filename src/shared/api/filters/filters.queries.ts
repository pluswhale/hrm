import { QueryParameters } from 'shared/hooks/useFetchData';
import {
    fetchFilterSetForCandidateCompetences,
    fetchFilterSetForCandidatesCountOfType,
    fetchFilterSetForRequests,
    fetchKeySkillsFilterSet,
    fetchPositionsFilterSet,
} from './filters.thunks';

export const queryParametersForPositionsEmployeeFilterSet = {
    queryKey: 'fetchPositionsForEmployeesFilterSet',
    queryThunk: fetchPositionsFilterSet,
} as QueryParameters<any>;

export const queryParametersForKeySkillsEmployeeFilterSet = {
    queryKey: 'fetchKeySkillsForEmployeesFilterSet',
    queryThunk: fetchKeySkillsFilterSet,
} as QueryParameters<any>;

export const queryParametersForThemesRequestsFilterSet = {
    queryKey: 'fetchThemesForRequestFilterSet',
    queryThunk: fetchFilterSetForRequests,
    queryThunkOptions: {
        type: 'type',
    },
} as QueryParameters<any>;

export const queryParametersForStatusesRequestsFilterSet = {
    queryKey: 'fetchStatusesForRequestFilterSet',
    queryThunk: fetchFilterSetForRequests,
    queryThunkOptions: {
        type: 'status',
    },
} as QueryParameters<any>;

export const queryParametersForCountByTypeInCandidatesFilterSet = {
    queryKey: 'fetchFilterSetForCandidatesCountOfType',
    queryThunk: fetchFilterSetForCandidatesCountOfType,
    queryThunkOptions: {},
} as QueryParameters<any>;

export const queryParametersForCompetencesInCandidatesFilterSet = {
    queryKey: 'fetchFilterSetForCandidateCompetences',
    queryThunk: fetchFilterSetForCandidateCompetences,
    queryThunkOptions: {},
} as QueryParameters<any>;

