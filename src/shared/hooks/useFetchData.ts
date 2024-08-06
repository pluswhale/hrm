import { useQuery } from '@tanstack/react-query';

export type QueryParameters<T> = {
    queryKey: string;
    queryThunk: (options: any) => Promise<T>;
    queryThunkOptions?: any;
    queryPageSize?: number;
    refetchInterval?: number;
};

export type ReturnedQueryType<T> = {
    data: T | undefined;
    isFetching: boolean;
    isFetched?: boolean;
    isFetchedAfterMount?: boolean;
};

export const useFetchData = <T>(queryParameters: QueryParameters<T>): ReturnedQueryType<T> => {
    const { queryKey, queryThunk, queryThunkOptions, queryPageSize, refetchInterval } = queryParameters;

    const { data, isFetching, isFetched, isFetchedAfterMount } = useQuery({
        queryKey: [queryKey, queryThunkOptions],
        refetchInterval: refetchInterval || false,
        queryFn: () => queryThunk(queryThunkOptions),
        enabled: queryThunkOptions?.enabled ? queryThunkOptions?.enabled : true,
    });

    return { data, isFetching, isFetched, isFetchedAfterMount };
};

