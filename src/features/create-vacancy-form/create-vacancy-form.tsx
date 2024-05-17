import { FormProvider, useForm } from 'react-hook-form';

import styles from './create-vacancy-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Button } from 'shared/components/button/button';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { stagesSelector } from '../../redux/selectors/create-vacancy';
import { useAppDispatch } from '../../redux/store';
import { addNewStage, removeStage, setStages } from '../../redux/slices/create-vacancy';
import { StageItemProps } from './types';
import deleteIcon from '../../assets/DeleteOutlined.svg';
import { useCreateVacancy } from 'shared/api/vacancies/mutations';

export const CreateVacancyForm = () => {
    const dispatch = useAppDispatch();
    const [newStage, setNewStage] = useState<string>('');
    const methods = useForm({ mode: 'onChange' });
    const createVacancyMutation = useCreateVacancy();

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
            Name: data.name,
            Salary: String(data.income_from) + '-' + String(data.income_to),
            Deadline: '2024-06-17T18:39:48.553Z', //data.deadline.replaceAll('.', '-') + 'T00:00:00.000Z'
            IsActive: true,
        } as any;

        if (stages.length > 0) body.Stages = stages;

        // const queryString = Object.keys(body)
        //     .map((key) => `${key}=${encodeURIComponent(body[key])}`)
        //     .join('&');

        createVacancyMutation.mutate(body);
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
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.create_vacancy}>
                <div className={styles.create_vacancy__container}>
                    <div className={styles.create_vacancy__form_wrapper}>
                        <h2 className={styles.create_vacancy__title}>Информация о вакансии</h2>

                        <div className={styles.create_vacancy__form}>
                            <Input
                                width={'100%'}
                                isRequired={true}
                                name={'name'}
                                placeholder={'Название вакансии'}
                                label="Название вакансии"
                            />
                            <Input
                                width={'45%'}
                                isRequired={true}
                                name={'deadline'}
                                pattern={{
                                    value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
                                    message: 'Введите дату в формате д.мес.год',
                                }}
                                placeholder={'Дата завершения'}
                                label="Дата завершения"
                            />
                            <div className={styles.create_vacancy__income}>
                                <Input
                                    width={'45%'}
                                    isRequired={true}
                                    name={'income_from'}
                                    pattern={{
                                        value: /^(?:[0-9]|[1-9][0-9]{1,6}|10000000)$/,
                                        message: 'Введите число от 0 до 10,000,000',
                                    }}
                                    placeholder={'от'}
                                    label="Предполагаемый уровень дохода"
                                />
                                <span className={styles.create_vacancy__deli}>-</span>
                                <Input
                                    width={'45%'}
                                    pattern={{
                                        value: /^(?:[0-9]|[1-9][0-9]{1,6}|10000000)$/,
                                        message: 'Введите число от 0 до 10,000,000',
                                    }}
                                    isRequired={true}
                                    name={'income_to'}
                                    placeholder={'до'}
                                />
                            </div>

                            {/* <Textarea
                                width={'100%'}
                                isRequired={false}
                                name={'requirement'}
                                placeholder={'Требования'}
                                pattern={{
                                    //@ts-ignore
                                    value: /^[а-яА-Я]+$/u,
                                    message: 'Введите требования вакансии на русской раскладке',
                                }}
                                label="Требования"
                            /> */}
                            <Textarea
                                width={'100%'}
                                isRequired={true}
                                name={'description'}
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
                <Button type={'submit'} styles={{ width: '189px' }} view={'default_bg'} text="Создать вакансию" />
            </form>
        </FormProvider>
    );
};

const StageItem: FC<StageItemProps> = ({ stage, onDelete }) => {
    return (
        <div className={styles.create_vacancy__stage}>
            <div className={styles.create_vacancy__stage__container}>
                <span className={styles.create_vacancy__stage__name}>
                    {stage.position}.{stage.name}
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

