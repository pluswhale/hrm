import { FC, ReactElement } from 'react';
import styles from './practise-item.module.scss';
import { PracticyItemProps } from './types';

export const PracticyItem: FC<PracticyItemProps> = ({practicy}): ReactElement => {

    const displayStatus = (status: string) => {
        let color = '';

        switch (status) {
            case 'Закрыта': {
                color = '#8A8A8A';
                break;
            }
            case 'В работе': {
                color = '#6362E7';
                break;
            }
            default: color = '#6362E7';
        }

        return <span style={{ backgroundColor: color }} className={styles.practicy_item__status}>{status}</span> 
    }


    return (
        <div className={styles.practicy_item}>
            <div className={styles.practicy_item__title_and_status}>
                <h4 className={styles.practicy_item__title}>{practicy.title}</h4>
                {displayStatus(practicy?.status)}
            </div>

            <div className={styles.practicy_item__row}>
                <span className={styles.practicy_item__row_label}>Тестовое задание</span>
                <span className={styles.vacancy_item__row_value}>{practicy.testTask}</span>
            </div>

            <div className={styles.practicy_item__row}>
                <span className={styles.practicy_item__row_label}>Комментарий:</span>
                <span className={styles.vacancy_item__row_value}>{practicy.comment}</span>
            </div>


         </div>
    )
}
