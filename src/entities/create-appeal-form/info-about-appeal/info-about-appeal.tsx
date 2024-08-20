import { FC, ReactElement } from 'react';
import styles from '../../../features/create-appeal-form/create-appeal-form.module.scss';
import { Input } from 'shared/components/input/input';
import { Textarea } from 'shared/components/textarea/textarea';
import { useMediaQuery } from 'react-responsive';
import DatePickerComponent from 'shared/components/date-picker/date-picker';

type Props = {
    dateEnd: Date | null;
    setDateEnd: (date: Date | null) => void;
};

export const InfoAboutAppeal: FC<Props> = ({ dateEnd, setDateEnd }): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className={styles.create_appeal__form_wrapper}>
            <h2 className={styles.create_appeal__title}>Информация о направлении практики</h2>
            <div className={styles.create_appeal__form}>
                <Input
                    width={'100%'}
                    isRequired={true}
                    name={'name'}
                    placeholder={'Название направления практики'}
                    label="Название направления практики"
                />
                {/* <Input
                    width={'100%'}
                    isRequired={false}
                    name={'deadline'}
                    pattern={{
                        value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
                        message: 'Введите дату в формате д.мес.год',
                    }}
                    placeholder={'Дата завершения'}
                    label="Дата завершения"
                /> */}

                <DatePickerComponent
                    customStyles={{ width: isMobile ? '100%' : '50%' }}
                    isRequired={false}
                    selectedDate={dateEnd}
                    setSelectedDate={setDateEnd}
                    labelText="Дата завершения"
                    placeholder="Дата завершения"
                />
                <Input
                    width={'45%'}
                    isRequired={false}
                    name={'desired_count_candidates'}
                    placeholder={'0'}
                    label="Количество мест"
                />

                <Input
                    width={'100%'}
                    isRequired={false}
                    name={'test_task_link'}
                    placeholder={'Ссылка'}
                    label="Ссылка на тестовое задание"
                />

                <Textarea
                    width={'100%'}
                    isRequired={false}
                    name={'requirements'}
                    placeholder={'Требования'}
                    label="Требования"
                />
                <Textarea
                    width={'100%'}
                    isRequired={false}
                    name={'responsibilities'}
                    placeholder={'Обязанности'}
                    label="Обязанности"
                />
            </div>
        </div>
    );
};

