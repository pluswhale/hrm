import { FC } from 'react';
import deleteIcon from '../../../../assets/DeleteOutlined.svg';

import styles from '../../../../features/create-appeal-form/create-appeal-form.module.scss';

export type StageItemProps = {
    stage: StageItem;
    onDelete: (stageId: string) => void;
};

export type StageItem = {
    id: string;
    name: string;
    position: number;
};

export const StageItem: FC<StageItemProps> = ({ stage, onDelete }) => {
    return (
        <div className={styles.create_appeal__stage}>
            <div className={styles.create_appeal__stage__container}>
                <span className={styles.create_appeal__stage__name}>
                    {stage.position}.{stage.name}
                </span>
                <img
                    onClick={() => onDelete(stage.id)}
                    className={styles.create_appeal__stage__delete_icon}
                    src={deleteIcon}
                    alt="delete icon"
                />
            </div>
        </div>
    );
};

