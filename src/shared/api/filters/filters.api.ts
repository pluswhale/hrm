import { Instance } from '../api-config';

export const filtersApi = {
    getPositionsFilterSet: () => Instance.get('filters/positions'),
    getKeySkillsFilterSet: () => Instance.get('filters/key-skills'),
    getFilterSetForRequests: (type: string) => Instance.get(`requests/filter-set/${type}`),
    getCountOfTypesForCandidates: () => Instance.get(`candidates/filters/count-by-type`),
    getCompetencesFilterSet: () => Instance.get(`candidates/filters/competences`),
};

