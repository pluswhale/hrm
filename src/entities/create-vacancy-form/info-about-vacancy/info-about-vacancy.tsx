import { FC, ReactElement } from 'react';
import styles from '../../../features/create-vacancy-form/create-vacancy-form.module.scss';
import { Input } from 'shared/components/input/input';
import DatePickerComponent from 'shared/components/date-picker/date-picker';
import { useMediaQuery } from 'react-responsive';

type Props = {
    dateEnd: Date | null;
    setDateEnd: (date: Date | null) => void;
};

export const InfoAboutVacancy: FC<Props> = ({ dateEnd, setDateEnd }): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
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
                    width={'100%'}
                    isRequired={true}
                    name={'vacancy_city'}
                    placeholder={'Город'}
                    label="Город размещения вакансии"
                />

                <div className={styles.create_vacancy__income}>
                    <Input
                        width={'50%'}
                        isRequired={false}
                        name={'desired_count_candidates'}
                        pattern={{
                            value: /^(?:[0-9]|[1-9][0-9]{1,6}|10000000)$/,
                            message: 'Введите число от 0 до 10,000,000',
                        }}
                        placeholder={'Сколько нужно человек'}
                        label="План поиска"
                    />
                    <span className={styles.create_vacancy__deli}>-</span>
                    {/* <Input
                        width={'50%'}
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
                </div>
                <div className={styles.create_vacancy__income}>
                    <Input
                        width={'50%'}
                        isRequired={false}
                        name={'income_from'}
                        pattern={{
                            value: /^(?:[0-9]|[1-9][0-9]{1,6}|10000000)$/,
                            message: 'Введите число от 0 до 10,000,000',
                        }}
                        placeholder={'от'}
                        label="Предполагаемый уровень дохода в месяц(на руки)"
                    />
                    <span className={styles.create_vacancy__deli}>-</span>
                    <Input
                        width={'50%'}
                        pattern={{
                            value: /^(?:[0-9]|[1-9][0-9]{1,6}|10000000)$/,
                            message: 'Введите число от 0 до 10,000,000',
                        }}
                        isRequired={false}
                        name={'income_to'}
                        placeholder={'до'}
                    />
                </div>
                <Input
                    width={'100%'}
                    isRequired={false}
                    name={'work_address'}
                    placeholder={'Город'}
                    label="Где будет работать кандидат"
                />
            </div>
        </div>
    );
};

