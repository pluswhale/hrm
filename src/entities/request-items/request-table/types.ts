import { Request } from 'shared/types/request.type';

export interface RequestTableProps {
    requests: Request[];
    currentRequestObjectForModal: Request;
    onOpenCreateRequestModal: () => void;
    setCurrentRequestObjectForModal: (request: Request) => void;
}

