import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './edit-vacancy.module.scss';
import { EditVacancyForm } from 'features/edit-vacancy-form';
import { VACANCY_DATA } from './constants';
import { Button } from 'shared/components/button/button';
import { useParams } from 'react-router-dom';
import { fetchVacancyById } from 'shared/api/vacancies/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchKanbanBoardForVacancy } from 'shared/api/kanban/thunks';

const EditVacancy = () => {
    const { id: vacancyId } = useParams();

    const queryParameters = {
        queryKey: 'fetchVacancyById',
        queryThunk: fetchVacancyById,
        queryThunkOptions: {
            vacancyId,
        },
    } as QueryParameters<any>;

    const vacancyByIdQuery = useFetchData(queryParameters);

    const queryParametersForKanbanBoard = {
        queryKey: 'fetchKanbanBoardForVacancy',
        queryThunk: fetchKanbanBoardForVacancy,
        queryThunkOptions: {
            vacancyId,
        },
    } as QueryParameters<any>;

    const kanbanBoardQuery = useFetchData(queryParametersForKanbanBoard);

    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/vacancies',
        },
        {
            title: vacancyByIdQuery?.data?.name,
            url: `/vacancies/${vacancyByIdQuery?.data?.id}`,
        },
        {
            title: 'Редактирование',
            url: undefined,
        },
    ];

    const stagesFromKanbanBoard = kanbanBoardQuery?.data?.stages?.map((board: any) => ({
        id: board.stageId,
        name: board.name,
        position: board.position,
    }));

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <div className={styles.vacancy_navigation__buttons}>
                    <Button view="default_bg_white" text="Остановить" />
                    <Button view="default_bg_white" text="Удалить" />
                </div>
            </div>
            <EditVacancyForm stages={stagesFromKanbanBoard} vacancy={vacancyByIdQuery?.data} />
        </DefaultContentWrapper>
    );
};

export default EditVacancy;

