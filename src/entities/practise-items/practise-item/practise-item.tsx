import { FC, ReactElement } from 'react';
import styles from './practise-item.module.scss';
import { PracticyItemProps } from './types';
import testTaskIcon from '../../../assets/test_task_icon.svg';

export const PracticyItem: FC<PracticyItemProps> = ({ practicy }): ReactElement => {
    const displayStatus = (status: boolean) => {
        let color = '#6362e7';
        let text = 'В работе';

        switch (status) {
            case false: {
                color = '#8A8A8A';
                text = 'Закрыта';
                break;
            }
            case true: {
                color = '#6362e7';
                text = 'В работе';
                break;
            }
            default:
                color = '#6362e7';
        }

        return (
            <span style={{ backgroundColor: color }} className={styles.practicy_item__status}>
                {text}
            </span>
        );
    };

    return (
        <div className={styles.practicy_item}>
            <div className={styles.practicy_item__title_and_status}>
                <h4 className={styles.practicy_item__title}>{practicy.name}</h4>
                {displayStatus(practicy?.is_active)}
            </div>

            <div className={styles.practicy_item__row}>
                <a href={practicy?.test_task_link} className={styles.practicy_item__row_label} target="_blank">
                    Тестовое задание
                </a>
                <img src={testTaskIcon} />
            </div>

            <div className={styles.practicy_item__col}>
                <span className={styles.practicy_item__row_label}>Комментарий:</span>
                <span className={styles.practicy_item__row_value}>Урфу</span>
            </div>
        </div>
    );
};

