export type StageItemProps = {
    stage: StageItem;
    onDelete: (stageId: number) => void;
};

export type StageItem = {
    id: number;
    name: string;
};

