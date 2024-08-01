import { requestsApi } from '../requests';
import { filtersApi } from './filters.api';

export const fetchPositionsFilterSet = async () => {
    try {
        const res = await filtersApi.getPositionsFilterSet();
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
        const res = await filtersApi.getKeySkillsFilterSet();
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchFilterSetForRequests = async (options: any) => {
    try {
        const res = await filtersApi.getFilterSetForRequests(options?.type);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchFilterSetForCandidateCompetences = async (options: any) => {
    try {
        const res = await filtersApi.getCompetencesFilterSet();
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

export const fetchFilterSetForCandidatesCountOfType = async (options: any) => {
    try {
        const res = await filtersApi.getCountOfTypesForCandidates();
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

