import { Instance } from '../api-config';

export const kanbanApi = {
    getKanbanBoard: (vacancyId: string) => Instance.get(`kanban/kanban-board/board?vacancyId=${vacancyId}`),
};

