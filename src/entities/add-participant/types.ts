export interface People {
    title: string;
    img: string;
}

export type AddParticipantProps = {
    onClose: () => void;
    onAddInModal: (personsIds: number[]) => void;
    personsData: any[];
};

