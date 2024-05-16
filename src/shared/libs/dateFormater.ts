import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const formatDate = (dateString: string) => {
    const date = dayjs(dateString, 'YYYY-MM-DDTHH:mm:ss.SSSSZ');

    date.locale('ru');

    return date.format('D MMMM YYYY [г.]');
};

