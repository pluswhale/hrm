import { Appeal } from 'shared/types/appeal.type';

export type StageItemProps = {
    stage: StageItem;
    onDelete: (stageId: string) => void;
};

export type StageItem = {
    id: string;
    name: string;
    position: number;
};

export type EditAppealProps = {
    appeal: Appeal;
};

