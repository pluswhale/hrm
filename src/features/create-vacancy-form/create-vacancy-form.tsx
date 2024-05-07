import { useForm } from 'react-hook-form';

import styles from './create-vacancy-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';

export const CreateVacancyForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {};

    return (
        <div className={styles.create_vacancy}>
            <div className={styles.create_vacancy__form_wrapper}>
                <h2>Инормация о вакансии</h2>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.create_vacancy__form}>
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'name'}
                        register={register}
                        placeholder={'Название вакансии'}
                        label="Название вакансии"
                    />
                    <Input
                        width={'50%'}
                        isRequired={false}
                        name={'deadline'}
                        register={register}
                        placeholder={'Дата завершения'}
                        label="Дата завершения"
                    />
                    <div></div>

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
                </form>
            </div>

            <div className={styles.create_vacancy__form_wrapper}>
                <h2>Доска рекрутинга</h2>
            </div>
        </div>
    );
};

