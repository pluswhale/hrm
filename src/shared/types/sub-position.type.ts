import { Employee } from './employee.type';
import { Position } from './position.type';

export interface SubPosition {
    id: number;
    title: string;
    position: Position;
    employees: Employee[];
}

