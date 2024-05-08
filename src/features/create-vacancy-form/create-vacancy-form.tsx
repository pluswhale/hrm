import { useForm } from 'react-hook-form';

import styles from './create-vacancy-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Button } from 'shared/components/button/button';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { stagesSelector } from '../../redux/selectors/create-vacancy';
import { useAppDispatch } from '../../redux/store';
import { addNewStage, removeStage } from '../../redux/slices/create-vacancy';
import { StageItemProps } from './types';
import deleteIcon from '../../assets/DeleteOutlined.svg';

export const CreateVacancyForm = () => {
    const dispatch = useAppDispatch();
    const [newStage, setNewStage] = useState<string>('');
    const { register, handleSubmit } = useForm();

    const stages = useSelector(stagesSelector);

    const onSubmit = (data: any) => {
        // Отпралвять запрос на сервер для сохранения
        console.log(data);
    };

    const onAddStage = () => {
        dispatch(addNewStage({ stageName: newStage }));
        setNewStage('');
    };

    const onRemoveStage = (stageId: number) => {
        dispatch(removeStage({ stageId }));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.create_vacancy}>
            <div className={styles.create_vacancy__container}>
                <div className={styles.create_vacancy__form_wrapper}>
                    <h2 className={styles.create_vacancy__title}>Инормация о вакансии</h2>

                    <div className={styles.create_vacancy__form}>
                        <Input
                            width={'100%'}
                            isRequired={true}
                            name={'name'}
                            register={register}
                            placeholder={'Название вакансии'}
                            label="Название вакансии"
                        />
                        <Input
                            width={'45%'}
                            isRequired={false}
                            name={'deadline'}
                            register={register}
                            placeholder={'Дата завершения'}
                            label="Дата завершения"
                        />
                        <div className={styles.create_vacancy__income}>
                            <Input
                                width={'45%'}
                                isRequired={false}
                                name={'income_from'}
                                register={register}
                                placeholder={'от'}
                                label="Предполагаемый уровень дохода"
                            />
                            <span className={styles.create_vacancy__deli}>-</span>
                            <Input
                                width={'45%'}
                                isRequired={false}
                                name={'income_to'}
                                register={register}
                                placeholder={'до'}
                            />
                        </div>

                        <Textarea
                            width={'100%'}
                            isRequired={false}
                            name={'requirement'}
                            register={register}
                            placeholder={'Требования'}
                            label="Требования"
                        />
                        <Textarea
                            width={'100%'}
                            isRequired={false}
                            name={'description'}
                            register={register}
                            placeholder={'Описание'}
                            label="Описание"
                        />
                    </div>
                </div>

                <div className={styles.create_vacancy__form_wrapper}>
                    <h2 className={styles.create_vacancy__title}>Доска рекрутинга</h2>
                    <div className={styles.create_vacancy__stages}>
                        <span className={styles.create_vacancy__stages__title}>Этапы</span>
                        <div className={styles.create_vacancy__stages__list}>
                            {stages?.length ? (
                                stages.map((stage) => <StageItem onDelete={onRemoveStage} stage={stage} />)
                            ) : (
                                <p>Добавьте новые этапы</p>
                            )}
                        </div>
                        <div className={styles.create_vacancy__stages__new}>
                            <Input
                                value={newStage}
                                onChange={setNewStage}
                                width={'100%'}
                                name={'new_stage'}
                                placeholder={'Новый этап'}
                            />
                            <Button
                                styles={{ width: '122px' }}
                                view={'default_bg'}
                                text="Добавить"
                                onClick={onAddStage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Button type={'submit'} styles={{ width: '189px' }} view={'default_bg'} text="Создать вакансию" />
        </form>
    );
};

const StageItem: FC<StageItemProps> = ({ stage, onDelete }) => {
    return (
        <div className={styles.create_vacancy__stage}>
            <div className={styles.create_vacancy__stage__container}>
                <span className={styles.create_vacancy__stage__name}>
                    {stage.id}.{stage.name}
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

