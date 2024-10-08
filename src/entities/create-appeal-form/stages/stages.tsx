import { FC, ReactElement, useEffect, useState } from 'react';
import styles from '../../../features/create-appeal-form/create-appeal-form.module.scss';
import { useAppDispatch } from '../../../redux/store';
import { addNewStage, removeStage, setStages } from '../../../redux/slices/create-appeal';
import { StageItem } from './stage-item/stage-item';
import { Input } from 'shared/components/input/input';
import { Button } from 'shared/components/button/button';

type Props = {
    stages: any[];
};

export const Stages: FC<Props> = ({ stages }): ReactElement => {
    const dispatch = useAppDispatch();
    const [newStage, setNewStage] = useState<string>('');

    useEffect(() => {
        return () => {
            dispatch(setStages({ stages: [] as any }));
        };
    }, []);

    const onAddStage = () => {
        dispatch(addNewStage({ stageName: newStage }));
        setNewStage('');
    };

    const onRemoveStage = (stageId: number | string) => {
        dispatch(removeStage({ stageId }));
    };

    return (
        <div className={styles.create_appeal__form_wrapper}>
            <h2 className={styles.create_appeal__title}>Доска рекрутинга</h2>
            <div className={styles.create_appeal__stages}>
                <span className={styles.create_appeal__stages__title}>Этапы</span>
                <div className={styles.create_appeal__stages__list}>
                    {stages?.length ? (
                        stages.map((stage, index: number) => (
                            <StageItem order={index} onDelete={onRemoveStage} stage={stage} />
                        ))
                    ) : (
                        <p>Добавьте новые этапы</p>
                    )}
                </div>
                <div className={styles.create_appeal__stages__new}>
                    <Input
                        value={newStage}
                        onChange={setNewStage}
                        width={'100%'}
                        name={'new_stage'}
                        placeholder={'Новый этап'}
                    />
                    <Button
                        type="button"
                        styles={{ width: '122px' }}
                        view={'default_bg'}
                        text="Добавить"
                        onClick={onAddStage}
                    />
                </div>
            </div>
        </div>
    );
};

