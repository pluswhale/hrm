import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

export const formatDate = (dateString: string | Date | undefined, template?: string, formatter?: string) => {
    const date = dayjs(dateString, template || 'YYYY-MM-DDTHH:mm:ss.SSSSZ'); // 'YYYY-MM-DDTHH:mm:ss.SSSSZ'

    return date.format(formatter || 'D MMMM YYYY [г.]'); // 'D MMMM YYYY [г.]'
};

