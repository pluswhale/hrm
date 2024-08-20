import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import style from './requests.module.scss';
import { Filter } from '../../../features/filter';
import RequestTable from '../../../entities/request-items/request-table/request-table';
import { filterSet } from './constants';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { statusesInFilterSelector, themesInFilterSelector } from '../../../redux/selectors/filter';
import {
    queryParametersForStatusesRequestsFilterSet,
    queryParametersForThemesRequestsFilterSet,
} from 'shared/api/filters/filters.queries';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setFilters, setToggleCheckboxInFilter } from '../../../redux/slices/filter';
import { fetchAllRequests } from 'shared/api/requests/thunks';
import { Request } from 'shared/types/request.type';
import { MobilePageHeader } from 'widgets/mobile-page-header/mobile-page-header';

const RequestsList = () => {
    const isLaptop = useMediaQuery({ maxWidth: '1500px' });
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const dispatch = useAppDispatch();
    const [currentRequestObjectForModal, setCurrentRequestObjectForModal] = useState<Request>({} as Request);
    const [searchValue, setSearchValue] = useState<string>('');
    const [isModalCreateRequestOpened, setIsModalCreateRequestOpened] = useState<boolean>(false);

    const themesForFilter = useSelector(themesInFilterSelector);
    const statusesForFilter = useSelector(statusesInFilterSelector);
    const themesFilterSetQuery = useFetchData(queryParametersForThemesRequestsFilterSet);
    const statusFilterSetQuery = useFetchData(queryParametersForStatusesRequestsFilterSet);

    useEffect(() => {
        dispatch(
            setFilters({
                statuses: statusFilterSetQuery?.data?.map((status: any) => ({ ...status, isActive: false })),
                themes: themesFilterSetQuery?.data?.map((theme: any) => ({ ...theme, isActive: false })),
            }),
        );
    }, [dispatch, statusFilterSetQuery?.data, themesFilterSetQuery?.data]);

    const queryParameters = {
        queryKey: 'fetchAllRequests',
        queryThunk: fetchAllRequests,
        queryThunkOptions: {
            search: searchValue || undefined,
            body: {
                statuses: getCurrentActiveStatuses(),
                themes: getCurrentActiveThemes(),
            },
        },
    } as QueryParameters<Request[]>;

    const requestsQuery = useFetchData(queryParameters);

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
                            return { ...status, name: 'Просмотрен' };

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

    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                {!isMobile ? <h2 className={style.container__title}>Запросы</h2> : null}
                {isMobile ? (
                    <MobilePageHeader
                        titlePage={'Запросы'}
                        filter={
                            <Filter
                                searchValue={searchValue}
                                onChangeSearchValue={setSearchValue}
                                onToggleCheckboxInFilter={onToggleCheckboxInFilter}
                                title="Поиск кандидата"
                                filterSet={filterRowsData}
                            />
                        }
                        searchValue={searchValue}
                        onChangeSearchValue={setSearchValue}
                    />
                ) : null}
                {requestsQuery?.data && (
                    <RequestTable
                        currentRequestObjectForModal={currentRequestObjectForModal}
                        requests={requestsQuery?.data}
                        onOpenCreateRequestModal={onOpenCreateRequestModal}
                        setCurrentRequestObjectForModal={setCurrentRequestObjectForModal}
                    />
                )}
            </div>
        </DefaultContentWrapper>
    );
};

export default RequestsList;

