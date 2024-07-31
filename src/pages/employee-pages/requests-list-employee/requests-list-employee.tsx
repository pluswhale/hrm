import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import style from './requests-list-employee.module.scss';
import { Filter } from '../../../features/filter';
import { filterSet } from './constants';
import { useMediaQuery } from 'react-responsive';
import { fetchAllRequestsForEmployee } from 'shared/api/requests/thunks';
import { useEffect, useState } from 'react';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useAppDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { setFilters, setToggleCheckboxInFilter } from '../../../redux/slices/filter';
import {
    queryParametersForStatusesRequestsFilterSet,
    queryParametersForThemesRequestsFilterSet,
} from 'shared/api/filters/filters.queries';
import { statusesInFilterSelector, themesInFilterSelector } from '../../../redux/selectors/filter';
import { userDataSelector } from '../../../redux/selectors/auth';
import RequestTableEmployee from 'entities/request-items/request-table-employee/request-table-employee';
import { Button } from 'shared/components/button/button';
import { PopupWithDarkOverlay } from 'shared/components/portal/popup-with-dark-overlay';
import { RequestModalCreate } from 'entities/request-items/request-modal-create-employee/request-modal-create';

const RequestsListEmployee = () => {
    const dispatch = useAppDispatch();
    const isLaptop = useMediaQuery({ maxWidth: '1500px' });
    const userId = useSelector(userDataSelector)?.id;
    const [currentRequestObjectForModal, setCurrentRequestObjectForModal] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [isModalCreateRequestOpened, setIsModalCreateRequestOpened] = useState<boolean>(false);

    const themesForFilter = useSelector(themesInFilterSelector);
    const statusesForFilter = useSelector(statusesInFilterSelector);
    const themesFilterSetQuery = useFetchData(queryParametersForThemesRequestsFilterSet);
    const statusFilterSetQuery = useFetchData(queryParametersForStatusesRequestsFilterSet);

    const queryParameters = {
        queryKey: 'fetchAllRequestsForEmployees',
        queryThunk: fetchAllRequestsForEmployee,
        queryThunkOptions: {
            employeeId: userId,
            search: searchValue || undefined,
            body: {
                statuses: getCurrentActiveStatuses(),
                themes: getCurrentActiveThemes(),
            },
        },
    } as QueryParameters<any>;

    const requestsQuery = useFetchData(queryParameters);

    useEffect(() => {
        dispatch(
            setFilters({
                statuses: statusFilterSetQuery?.data?.map((status: any) => ({ ...status, isActive: false })),
                themes: themesFilterSetQuery?.data?.map((theme: any) => ({ ...theme, isActive: false })),
            }),
        );
    }, [dispatch, statusFilterSetQuery?.data, themesFilterSetQuery?.data]);

    const filterRowsData = filterSet.map((filterRow) => {
        if (filterRow.id === 1) {
            return {
                ...filterRow,
                checkboxes: statusesForFilter?.map((status) => {
                    switch (status.name) {
                        case 'new':
                            return { ...status, name: 'Новый' };
                        case 'rejected':
                            return { ...status, name: 'Отклонен' };
                        case 'approved':
                            return { ...status, name: 'Подтвержден' };
                        case 'seen':
                            return { ...status, name: 'Просмотреть' };

                        default:
                            return status;
                    }
                }),
            };
        } else {
            return {
                ...filterRow,
                checkboxes: themesForFilter?.map((theme) => {
                    switch (theme.name) {
                        case 'meeting with management':
                            return { ...theme, name: 'Встреча с руководством' };
                        case 'vacation':
                            return { ...theme, name: 'Отпуск' };
                        case 'compensation':
                            return { ...theme, name: 'Компенсация' };
                        case 'offer':
                            return { ...theme, name: 'Предложение' };

                        default:
                            return { ...theme, name: 'Другое' };
                    }
                }),
            };
        }
    });

    function getCurrentActiveThemes(): string | null {
        const activeThemes = themesForFilter
            ?.map((theme) => (theme.isActive ? theme.id : null))
            .filter(Boolean)
            .join(',');
        return activeThemes?.length ? activeThemes : null;
    }

    function getCurrentActiveStatuses(): string | null {
        const activeStatuses = statusesForFilter
            ?.map((status) => (status.isActive ? status.id : null))
            .filter(Boolean)
            .join(',');
        return activeStatuses?.length ? activeStatuses : null;
    }

    const onToggleCheckboxInFilter = (filterSetName: string, checkboxId: number) => {
        dispatch(setToggleCheckboxInFilter({ filterSetName, checkboxId }));
    };

    const onOpenCreateRequestModal = () => {
        setIsModalCreateRequestOpened(true);
    };
    const onCloseModalCreateRequest = () => {
        setIsModalCreateRequestOpened(false);
    };

    return (
        <DefaultContentWrapper>
            <div className={style.action_buttons}>
                <h2 className={style.container__title}>Запросы</h2>
                <Button
                    onClick={onOpenCreateRequestModal}
                    styles={{ width: 'fit-content' }}
                    text="Новый запрос"
                    view="default_bg_white"
                />
            </div>
            <div className={style.container}>
                {isLaptop && (
                    <Filter
                        searchValue={searchValue}
                        onChangeSearchValue={setSearchValue}
                        filterSet={filterRowsData}
                        title="Найти запрос"
                        onToggleCheckboxInFilter={onToggleCheckboxInFilter}
                    />
                )}
                <RequestTableEmployee
                    currentRequestObjectForModal={currentRequestObjectForModal}
                    requests={requestsQuery?.data}
                    onOpenCreateRequestModal={onOpenCreateRequestModal}
                    setCurrentRequestObjectForModal={setCurrentRequestObjectForModal}
                />
                <PopupWithDarkOverlay onClose={onCloseModalCreateRequest} isOpened={isModalCreateRequestOpened}>
                    <RequestModalCreate
                        currentRequestObjectForModal={currentRequestObjectForModal}
                        onClose={onCloseModalCreateRequest}
                    />
                </PopupWithDarkOverlay>
                {!isLaptop && (
                    <Filter
                        searchValue={searchValue}
                        onChangeSearchValue={setSearchValue}
                        filterSet={filterRowsData}
                        title="Найти запрос"
                        onToggleCheckboxInFilter={onToggleCheckboxInFilter}
                    />
                )}
            </div>
        </DefaultContentWrapper>
    );
};

export default RequestsListEmployee;

