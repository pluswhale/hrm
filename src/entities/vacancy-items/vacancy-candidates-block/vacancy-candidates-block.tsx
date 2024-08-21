import { FC, ReactElement, useEffect, useState } from 'react';
import { VacancyCandidatesBlockProps } from './types';

import styles from './vacancy-candidates-block.module.scss';
import { VacancyCandidateCard } from '../vacancy-candidate-card';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useMoveCandidateInStage } from 'shared/api/vacancies/mutations';
import { useParams } from 'react-router';

export const VacancyCandidatesBlock: FC<VacancyCandidatesBlockProps> = ({ stages }): ReactElement => {
    const { id: vacancyId } = useParams();
    const [columns, setColumns] = useState(stages);
    const moveCandidateInStageMutation = useMoveCandidateInStage();

    useEffect(() => {
        setColumns(stages); // Сетаем колонки с данными с бека
    }, []);

    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.candidates];
            const destItems = [...destColumn.candidates];
            const [removed] = sourceItems.splice(source.index, 1);

            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    candidates: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    candidates: destItems,
                },
            });

            const body = {
                vacancyId: vacancyId || '',
                candidateId: removed?.id,
                fromStageId: sourceColumn?.id,
                toStageId: destColumn?.id,
            };

            moveCandidateInStageMutation.mutate(body);
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.candidates];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    candidates: copiedItems,
                },
            });
        }
    };

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
            {columns &&
                Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <Droppable key={index} droppableId={columnId}>
                            {(provided, snapshot) => (
                                <div className={styles.vacancy_candidates_block}>
                                    <span className={styles.vacancy_candidates_block__count}>
                                        {column?.name}-{column?.candidates?.length}
                                    </span>
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={styles.vacancy_candidates_block__card}
                                    >
                                        <div className={styles.vacancy_candidates_block__card_container}>
                                            {column?.candidates?.map((candidate: any, index: any) => (
                                                <VacancyCandidateCard
                                                    key={candidate?.id}
                                                    candidate={candidate}
                                                    index={index}
                                                />
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

