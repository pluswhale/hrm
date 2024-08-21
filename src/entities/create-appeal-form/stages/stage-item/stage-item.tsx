import { FC } from 'react';
import deleteIcon from '../../../../assets/DeleteOutlined.svg';

import styles from '../../../../features/create-appeal-form/create-appeal-form.module.scss';
import { StageAppeal } from 'shared/types/stage-appeal.type';

export type StageItemProps = {
    stage: StageAppeal;
    order: number;
    onDelete: (stageId: string | number) => void;
};

export const StageItem: FC<StageItemProps> = ({ stage, order, onDelete }) => {
    return (
        <div className={styles.create_appeal__stage}>
            <div className={styles.create_appeal__stage__container}>
                <span className={styles.create_appeal__stage__name}>
                    {order + 1}.{stage.name}
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

