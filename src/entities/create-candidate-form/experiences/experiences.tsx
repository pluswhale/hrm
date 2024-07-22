import { FC } from 'react';
import { addNewExperience } from '../../../redux/slices/create-candidate';
import { useAppDispatch } from '../../../redux/store';
import { Input } from 'shared/components/input/input';
import { Textarea } from 'shared/components/textarea';

import plusIcon from '../../../assets/plus_icon.svg';

import styles from '../../../features/create-candidate-form/create-candidate-form.module.scss';

type ExperiencesProps = {
    experiences: any;
};

export const Experience: FC<ExperiencesProps> = ({ experiences }) => {
    const dispatch = useAppDispatch();

    const onAddNewExperience = () => {
        dispatch(addNewExperience());
    };

    return (
        <>
            {experiences &&
                experiences?.map((_: any, index: number) => (
                    <div key={index} className={styles.create_candidate__form_wrapper}>
                        <h2 className={styles.create_candidate__title}>Опыт работы</h2>
                        <div className={styles.create_candidate__form}>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`company-name-${index + 1}`}
                                    placeholder={'Название компании'}
                                    label="Название компании"
                                />
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`job-title-${index + 1}`}
                                    placeholder={'Должность'}
                                    label="Должность"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Textarea
                                    width={'20%'}
                                    isRequired={false}
                                    name={`responsibilities-and-achievements-${index + 1}`}
                                    placeholder={'Обязанности и достижения'}
                                    label="Обязанности и достижения"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'20%'}
                                    isRequired={false}
                                    name={`start-job-date-${index + 1}`}
                                    placeholder={'Дата начала работы'}
                                    label="Дата начала работы"
                                />
                                <Input
                                    width={'20%'}
                                    isRequired={false}
                                    name={`end-job-date-${index + 1}`}
                                    placeholder={'Дата окончания работы'}
                                    label="Дата окончания работы"
                                />
                            </div>
                            <img
                                className={styles.create_candidate__form_plus_icon}
                                onClick={onAddNewExperience}
                                src={plusIcon}
                                alt="add new"
                            />
                        </div>
                    </div>
                ))}
        </>
    );
};

