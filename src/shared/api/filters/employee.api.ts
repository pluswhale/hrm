import { Instance } from '../api-config';

export const employeeFiltersApi = {
    getPositionsFilterSet: () => Instance.get('filters/positions'),
    getKeySkillsFilterSet: () => Instance.get('filters/key-skills'),
};

