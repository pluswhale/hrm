import { FC } from 'react';
import deleteIcon from '../../../../assets/DeleteOutlined.svg';

import styles from '../../../../features/create-vacancy-form/create-vacancy-form.module.scss';

export type StageItemProps = {
    stage: StageItem;
    order: number;
    onDelete: (stageId: string) => void;
};

export type StageItem = {
    id: string;
    name: string;
    position: number;
};

export const StageItem: FC<StageItemProps> = ({ stage, order, onDelete }) => {
    return (
        <div className={styles.create_vacancy__stage}>
            <div className={styles.create_vacancy__stage__container}>
                <span className={styles.create_vacancy__stage__name}>
                    {order + 1}.{stage.name}
                </span>
                <img
                    onClick={() => onDelete(stage.id)}
                    className={styles.create_vacancy__stage__delete_icon}
                    src={deleteIcon}
                    alt="delete icon"
                />
            </div>
        </div>
    );
};

