import { FormProvider, useForm } from 'react-hook-form';

import styles from './edit-appeal-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Button } from 'shared/components/button/button';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { stagesSelector } from '../../redux/selectors/create-appeal';
import { useAppDispatch } from '../../redux/store';
import { addNewStage, removeStage, setStages } from '../../redux/slices/create-appeal';
import { EditAppealProps, StageItemProps } from './types';
import deleteIcon from '../../assets/DeleteOutlined.svg';
import { useCreateAppeal } from 'shared/api/appeals/mutations';

export const EditAppealForm: FC<EditAppealProps> = ({ appeal }): ReactElement => {
    const dispatch = useAppDispatch();
    const [newStage, setNewStage] = useState<string>('');
    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            description: appeal.description.join(''),
            name: appeal.title,
            requirement: appeal.requirements.join(''),
            countPlaces: appeal.seats,
            deadline: appeal.deadline,
        },
    });
    const createAppealMutation = useCreateAppeal();

    const stages = useSelector(stagesSelector);

    useEffect(() => {
        return () => {
            dispatch(setStages({ stages: [] as any }));
        };
    }, []);

    const onSubmit = (data: any) => {
        // Отпралвять запрос на сервер для сохранения
        const body = {
            Description: data.description,
            Requirements: data.requirement,
            Name: data.name,
            CountPlaces: data.countPlaces,
            Deadline: data.deadline,
        } as any;

        if (stages.length > 0) body.Stages = stages;

        createAppealMutation.mutate(body);
    };

    const onAddStage = () => {
        dispatch(addNewStage({ stageName: newStage }));
        setNewStage('');
    };

    const onRemoveStage = (stageId: string) => {
        dispatch(removeStage({ stageId }));
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.edit_appeal}>
                <div className={styles.edit_appeal__container}>
                    <div className={styles.edit_appeal__form_wrapper}>
                        <h2 className={styles.edit_appeal__title}>Информация о направлении практики</h2>
                        <div className={styles.edit_appeal__form}>
                            <Input
                                width={'100%'}
                                isRequired={true}
                                name={'name'}
                                placeholder={'Название направления практики'}
                                label="Название направления практики"
                            />
                            <Input
                                width={'45%'}
                                isRequired={false}
                                name={'deadline'}
                                pattern={{
                                    value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
                                    message: 'Введите дату в формате д.мес.год',
                                }}
                                placeholder={'Дата завершения'}
                                label="Дата завершения"
                            />
                            <Input
                                width={'45%'}
                                isRequired={false}
                                name={'countPlaces'}
                                placeholder={'0'}
                                label="Количество мест"
                            />

                            <Textarea
                                width={'45%'}
                                isRequired={false}
                                name={'requirement'}
                                placeholder={'Требования'}
                                label="Требования"
                            />
                            <Textarea
                                width={'45%'}
                                isRequired={false}
                                name={'description'}
                                placeholder={'Описание'}
                                label="Описание"
                            />
                        </div>
                    </div>

                    <div className={styles.edit_appeal__form_wrapper}>
                        <h2 className={styles.edit_appeal__title}>Доска рекрутинга</h2>
                        <div className={styles.edit_appeal__stages}>
                            <span className={styles.edit_appeal__stages__title}>Этапы</span>
                            <div className={styles.edit_appeal__stages__list}>
                                {stages?.length ? (
                                    stages.map((stage) => <StageItem onDelete={onRemoveStage} stage={stage} />)
                                ) : (
                                    <p>Добавьте новые этапы</p>
                                )}
                            </div>
                            <div className={styles.edit_appeal__stages__new}>
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
                </div>
                <Button type={'submit'} styles={{ width: '189px' }} view={'default_bg'} text="Создать направление" />
            </form>
        </FormProvider>
    );
};

const StageItem: FC<StageItemProps> = ({ stage, onDelete }) => {
    return (
        <div className={styles.edit_appeal__stage}>
            <div className={styles.edit_appeal__stage__container}>
                <span className={styles.edit_appeal__stage__name}>
                    {stage.position}.{stage.name}
                </span>
                <img
                    onClick={() => onDelete(stage.id)}
                    className={styles.edit_appeal__stage__delete_icon}
                    src={deleteIcon}
                    alt="delete icon"
                />
            </div>
        </div>
    );
};

