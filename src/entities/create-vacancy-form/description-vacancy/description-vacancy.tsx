import { FC, ReactElement } from 'react';
import styles from '../../../features/create-vacancy-form/create-vacancy-form.module.scss';
import { Textarea } from 'shared/components/textarea';

export const DescriptionVacancy: FC = (): ReactElement => {
    return (
        <div className={styles.create_vacancy__form_wrapper}>
            <h2 className={styles.create_vacancy__title}>Описание вакансии</h2>

            <div className={styles.create_vacancy__form}>
                <Textarea
                    width={'100%'}
                    isRequired={false}
                    name={'responsibilities'}
                    placeholder={'Описание'}
                    label="Обязанности"
                />
                <Textarea
                    width={'100%'}
                    isRequired={false}
                    name={'requirements'}
                    placeholder={'Описание'}
                    label="Требования"
                />

                <Textarea
                    width={'100%'}
                    isRequired={false}
                    name={'description'}
                    placeholder={'Описание'}
                    label="Условия"
                />
            </div>
        </div>
    );
};

