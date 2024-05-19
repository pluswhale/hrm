import { TimelineItemBase } from 'entities/timeline';
import styles from './history-item.module.scss';

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
    return (
        <div className={styles.history_item}>
            <TimelineItemBase position="left" items={data} />
        </div>
    );
};

