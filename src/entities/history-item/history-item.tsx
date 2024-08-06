import { TimelineItemBase } from 'entities/timeline';
import styles from './history-item.module.scss';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchEmployeeHistory } from 'shared/api/user/thunks';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { formatDate } from 'shared/libs/dateFormater';

type HistoryItemProps = {
    userName: string;
};

const data = [
    { value: '12 декабря 2022', label: 'Устройство' },
    { value: '20 мая  2023', label: 'Отправление запроса на предложение' },
    { value: '21 мая  2023', label: 'Одобрение запроса на предложение' },
    { value: '24 сентбря  2023', label: 'Отправление запроса на отпуск' },
    { value: '25 сентбря  2023', label: 'Отклонение запроса на отпуск' },
];

export const HistoryItem = ({ userName }: HistoryItemProps) => {
    const { id: employeeId } = useParams();
    const [historyData, setHistoryData] = useState<any[]>([]);

    const queryParam = {
        queryKey: 'fetchEmployeeHistory',
        queryThunk: fetchEmployeeHistory,
        queryThunkOptions: {
            employeeId,
        },
    } as QueryParameters<any>;

    const employeeHistoryQuery = useFetchData(queryParam);

    useEffect(() => {
        if (employeeHistoryQuery?.data) {
            const transformedData = employeeHistoryQuery?.data?.map((history: any) => {
                return { value: formatDate(history?.created_at), label: history?.text };
            });

            if (!historyData?.length) {
                setHistoryData(transformedData);
            }
        }
    }, [employeeHistoryQuery?.data]);

    return (
        <div className={styles.history_item}>
            <TimelineItemBase position="left" items={historyData} />
        </div>
    );
};

