import { kanbanApi } from '.';

export const fetchKanbanBoardForVacancy = async (options: any) => {
    try {
        const res = await kanbanApi.getKanbanBoard(options?.vacancyId);
        if (res) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.error(error);
    }
};

