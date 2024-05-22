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

type Appeal = {
    id: number;
    title: string;
    created_at: string;
    navigationUrl: string;
    deadline: string;
    status: string;
    seats: string;
    accepted: string;
    description: string[];
    requirements: string[];
};
