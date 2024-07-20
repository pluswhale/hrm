import { Instance } from '../api-config';

export const filtersApi = {
    getPositionsFilterSet: () => Instance.get('filters/positions'),
    getKeySkillsFilterSet: () => Instance.get('filters/key-skills'),
    getFilterSetForRequests: (type: string) => Instance.get(`requests/filter-set/${type}`),
};

