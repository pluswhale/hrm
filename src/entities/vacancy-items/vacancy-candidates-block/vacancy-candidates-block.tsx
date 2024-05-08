import { FC, ReactElement, useEffect, useState } from 'react';
import { VacancyCandidatesBlockProps } from './types';

import styles from './vacancy-candidates-block.module.scss';
import { VacancyCandidateCard } from '../vacancy-candidate-card';
import { columnsFromBackend } from './canban/constants';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const VacancyCandidatesBlock: FC<VacancyCandidatesBlockProps> = ({}): ReactElement => {
    const [columns, setColumns] = useState(columnsFromBackend);

    useEffect(() => {
        setColumns(columnsFromBackend); // Сетаем колонки с данными с бека
    }, []);

    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
            {Object.entries(columns).map(([columnId, column], index) => {
                return (
                    <Droppable key={columnId} droppableId={columnId}>
                        {(provided, snapshot) => (
                            <div className={styles.vacancy_candidates_block}>
                                <span className={styles.vacancy_candidates_block__count}>
                                    {column.title}-{column.items.length}
                                </span>
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={styles.vacancy_candidates_block__card}
                                >
                                    <div className={styles.vacancy_candidates_block__card_container}>
                                        {column.items.map((item, index) => (
                                            <VacancyCandidateCard candidate={item} index={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </Droppable>
                );
            })}
        </DragDropContext>
    );
};

