import { employeeFiltersApi } from './employee.api';

export const fetchPositionsFilterSet = async () => {
    try {
        const res = await employeeFiltersApi.getPositionsFilterSet();
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchKeySkillsFilterSet = async () => {
    try {
        const res = await employeeFiltersApi.getKeySkillsFilterSet();
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

