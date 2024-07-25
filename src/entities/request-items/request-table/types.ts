export interface Request {
    id: number;
    name: string;
    profession: string;
    status: string;
    meeting: string;
    data: string;
    imageUrl: string;
}

export interface RequestTableProps {
    requests: any[];
    currentRequestObjectForModal: any;
    onOpenCreateRequestModal: any;
    setCurrentRequestObjectForModal: any;
}

