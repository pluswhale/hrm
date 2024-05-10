import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Button } from 'shared/components/button/button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { experiencesSelector, educationsSelector } from '../../redux/selectors/create-candidate';
import { addNewExperience, addNewEducation } from '../../redux/slices/create-candidate';
import plusIcon from '../../assets/plus_icon.svg';

import styles from './edit-candidate-form.module.scss';

export const EditCandidateForm = () => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        // Отпралвять запрос на сервер для сохранения
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.create_candidate}>
                <div className={styles.create_candidate__container}>
                    <InfoAboutCandidate />
                    <Education />
                    <Experience />
                </div>
                <Button type={'submit'} styles={{ width: '189px' }} view={'default_bg'} text="Создать" />
            </form>
        </FormProvider>
    );
};

const InfoAboutCandidate = () => {
    return (
        <div className={styles.create_candidate__form_wrapper}>
            <h2 className={styles.create_candidate__title}>Инормация о кандидате</h2>
            <div className={styles.create_candidate__form}>
                <div className={styles.create_candidate__form_row}>
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'last_name'}
                        pattern={{
                            //@ts-ignore
                            value: /^[а-яА-Я]+$/u,
                            message: 'Введите фамилию кандидата на русской раскладке',
                        }}
                        placeholder={'Фамилия'}
                        label="Фамилия"
                    />
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'first_name'}
                        pattern={{
                            //@ts-ignore
                            value: /^[а-яА-Я]+$/u,
                            message: 'Введите имя кандидата на русской раскладке',
                        }}
                        placeholder={'Имя'}
                        label="Имя"
                    />

                    <Input
                        width={'100%'}
                        isRequired={false}
                        name={'sur_name'}
                        pattern={{
                            //@ts-ignore
                            value: /^[а-яА-Я]+$/u,
                            message: 'Введите отчество кандидата на русской раскладке',
                        }}
                        placeholder={'Отчество'}
                        label="Отчество"
                    />
                </div>
                <div className={styles.create_candidate__form_row}>
                    <Input
                        width={'32.3%'}
                        isRequired={false}
                        name={'birth_day'}
                        pattern={{
                            value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
                            message: 'Введите дату рождения в формате д.мес.год',
                        }}
                        placeholder={'Дата рождения'}
                        label="Дата рождения"
                    />
                    <Input
                        width={'32.3%'}
                        isRequired={true}
                        name={'location'}
                        pattern={{
                            //@ts-ignore
                            value: /^[а-яА-Я]+$/u,
                            message: 'Введите место проживания на русской раскладке',
                        }}
                        placeholder={'Место проживания'}
                        label="Место проживания"
                    />
                </div>
                <div className={styles.create_candidate__form_row}>
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'email'}
                        pattern={{
                            //@ts-ignore
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Введите корректный email',
                        }}
                        placeholder={'Почта'}
                        label="Почта"
                    />
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'phone_number'}
                        pattern={{
                            value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                            message: 'Введите номер телефона в формате +8234567890',
                        }}
                        placeholder={'Номер телефона'}
                        label="Номер телефона"
                    />
                    <Input
                        width={'100%'}
                        isRequired={false}
                        name={'telegram'}
                        pattern={{
                            value: /@[a-zA-Z0-9_]{5,32}/,
                            message: 'Введите имя пользователя Telegram в формате @username',
                        }}
                        placeholder={'Telegram'}
                        label="Telegram"
                    />
                </div>
            </div>
        </div>
    );
};

const Education = () => {
    const dispatch = useAppDispatch();

    const educations = useSelector(educationsSelector);

    const onAddNewEducation = () => {
        dispatch(addNewEducation());
    };

    return (
        <>
            {educations &&
                educations.map((_, index: number) => (
                    <div key={index} className={styles.create_candidate__form_wrapper}>
                        <h2 className={styles.create_candidate__title}>Образование</h2>
                        <div className={styles.create_candidate__form}>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`university_name-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Название учебного заведения'}
                                    label="Название учебного заведения"
                                />
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`faculty-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Имя'}
                                    label="Имя"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'49%'}
                                    isRequired={false}
                                    name={`specialization-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Дата рождения'}
                                    label="Дата рождения"
                                />
                                <Input
                                    width={'20%'}
                                    isRequired={true}
                                    name={`end-date-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Год окончания'}
                                    label="Год окончания"
                                />
                            </div>
                            <img
                                className={styles.create_candidate__form_plus_icon}
                                onClick={onAddNewEducation}
                                src={plusIcon}
                                alt="add new"
                            />
                        </div>
                    </div>
                ))}
        </>
    );
};

const Experience = () => {
    const dispatch = useAppDispatch();

    const experiences = useSelector(experiencesSelector);

    const onAddNewExperience = () => {
        dispatch(addNewExperience());
    };

    return (
        <>
            {experiences &&
                experiences.map((_, index: number) => (
                    <div key={index} className={styles.create_candidate__form_wrapper}>
                        <h2 className={styles.create_candidate__title}>Опыт работы</h2>
                        <div className={styles.create_candidate__form}>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`company-name-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Название компании'}
                                    label="Название компании"
                                />
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`job-title-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Должность'}
                                    label="Должность"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Textarea
                                    width={'20%'}
                                    isRequired={false}
                                    name={`responsibilities-and-achievements-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Обязанности и достижения'}
                                    label="Обязанности и достижения"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'20%'}
                                    isRequired={false}
                                    name={`start-job-date-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
                                    placeholder={'Дата начала работы'}
                                    label="Дата начала работы"
                                />
                                <Input
                                    width={'20%'}
                                    isRequired={true}
                                    name={`end-job-date-${index + 1}`}
                                    pattern={{
                                        //@ts-ignore
                                        value: /^[а-яА-Я]+$/u,
                                        message: 'Введите название вакансии на русской раскладке',
                                    }}
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

