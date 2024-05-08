import { useForm } from 'react-hook-form';
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
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        // Отпралвять запрос на сервер для сохранения
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.create_candidate}>
            <div className={styles.create_candidate__container}>
                <InfoAboutCandidate register={register} />
                <Education register={register} />
                <Experience register={register} />
            </div>
            <Button type={'submit'} styles={{ width: '189px' }} view={'default_bg'} text="Создать" />
        </form>
    );
};

type InfoAboutCandidateProps = {
    register: any;
};

const InfoAboutCandidate = (props: InfoAboutCandidateProps) => {
    const { register } = props;

    return (
        <div className={styles.create_candidate__form_wrapper}>
            <h2 className={styles.create_candidate__title}>Инормация о кандидате</h2>
            <div className={styles.create_candidate__form}>
                <div className={styles.create_candidate__form_row}>
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'last_name'}
                        register={register}
                        placeholder={'Фамилия'}
                        label="Фамилия"
                    />
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'first_name'}
                        register={register}
                        placeholder={'Имя'}
                        label="Имя"
                    />

                    <Input
                        width={'100%'}
                        isRequired={false}
                        name={'sur_name'}
                        register={register}
                        placeholder={'Отчество'}
                        label="Отчество"
                    />
                </div>
                <div className={styles.create_candidate__form_row}>
                    <Input
                        width={'32.3%'}
                        isRequired={false}
                        name={'birth_day'}
                        register={register}
                        placeholder={'Дата рождения'}
                        label="Дата рождения"
                    />
                    <Input
                        width={'32.3%'}
                        isRequired={true}
                        name={'location'}
                        register={register}
                        placeholder={'Место проживания'}
                        label="Место проживания"
                    />
                </div>
                <div className={styles.create_candidate__form_row}>
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'email'}
                        register={register}
                        placeholder={'Почта'}
                        label="Почта"
                    />
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'phone_number'}
                        register={register}
                        placeholder={'Номер телефона'}
                        label="Номер телефона"
                    />
                    <Input
                        width={'100%'}
                        isRequired={false}
                        name={'telegram'}
                        register={register}
                        placeholder={'Telegram'}
                        label="Telegram"
                    />
                </div>
            </div>
        </div>
    );
};

type EducationProps = {
    register: any;
};

const Education = (props: EducationProps) => {
    const dispatch = useAppDispatch();
    const { register } = props;

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
                                    register={register}
                                    placeholder={'Название учебного заведения'}
                                    label="Название учебного заведения"
                                />
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`faculty-${index + 1}`}
                                    register={register}
                                    placeholder={'Имя'}
                                    label="Имя"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'49%'}
                                    isRequired={false}
                                    name={`specialization-${index + 1}`}
                                    register={register}
                                    placeholder={'Дата рождения'}
                                    label="Дата рождения"
                                />
                                <Input
                                    width={'20%'}
                                    isRequired={true}
                                    name={`end-date-${index + 1}`}
                                    register={register}
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

type ExperienceProps = {
    register: any;
};

const Experience = (props: ExperienceProps) => {
    const dispatch = useAppDispatch();
    const { register } = props;

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
                                    register={register}
                                    placeholder={'Название компании'}
                                    label="Название компании"
                                />
                                <Input
                                    width={'100%'}
                                    isRequired={false}
                                    name={`job-title-${index + 1}`}
                                    register={register}
                                    placeholder={'Должность'}
                                    label="Должность"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Textarea
                                    width={'20%'}
                                    isRequired={false}
                                    name={`responsibilities-and-achievements-${index + 1}`}
                                    register={register}
                                    placeholder={'Обязанности и достижения'}
                                    label="Обязанности и достижения"
                                />
                            </div>
                            <div className={styles.create_candidate__form_row}>
                                <Input
                                    width={'20%'}
                                    isRequired={false}
                                    name={`start-job-date-${index + 1}`}
                                    register={register}
                                    placeholder={'Дата начала работы'}
                                    label="Дата начала работы"
                                />
                                <Input
                                    width={'20%'}
                                    isRequired={true}
                                    name={`end-job-date-${index + 1}`}
                                    register={register}
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

