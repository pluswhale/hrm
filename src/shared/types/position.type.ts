import { SubPosition } from './sub-position.type';

export interface Position {
    id: number;
    title: string;
    sub_positions: SubPosition[];
}

