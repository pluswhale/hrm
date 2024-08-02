import { FC, ReactElement } from 'react';
import styles from './practise-item.module.scss';
import { PracticyItemProps } from './types';
import testTaskIcon from '../../../assets/test_task_icon.svg';

export const PracticyItem: FC<PracticyItemProps> = ({ practicy }): ReactElement => {
    const displayStatus = (status: string) => {
        let color = '';

        switch (status) {
            case 'Закрыта': {
                color = '#8A8A8A';
                break;
            }
            case 'В работе': {
                color = '$purple';
                break;
            }
            default:
                color = '$purple';
        }

        return (
            <span style={{ backgroundColor: color }} className={styles.practicy_item__status}>
                {status}
            </span>
        );
    };

    return (
        <div className={styles.practicy_item}>
            <div className={styles.practicy_item__title_and_status}>
                <h4 className={styles.practicy_item__title}>{practicy.title}</h4>
                {displayStatus(practicy?.status)}
            </div>

            <div className={styles.practicy_item__row}>
                <span className={styles.practicy_item__row_label}>Тестовое задание</span>
                <img src={testTaskIcon} />
            </div>

            <div className={styles.practicy_item__col}>
                <span className={styles.practicy_item__row_label}>Комментарий:</span>
                <span className={styles.practicy_item__row_value}>{practicy.comment}</span>
            </div>
        </div>
    );
};

