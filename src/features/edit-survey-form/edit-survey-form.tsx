import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import styles from './edit-survey-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Radio } from '../../shared/components/radio';
import { Selector } from '../../shared/components/selector';
import { options } from './constants';

export const EditSurveyForm = () => {
    const methods = useForm();
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [selectedValueRadio, setSelectedValueRadio] = useState<string>('');

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    const onSubmit = (data: any) => {};

    const handleRadioChange = (value: any) => {
        setSelectedValueRadio(value);
    };

    return (
        <div className={styles.create_survey}>
            <div className={styles.create_survey__form_wrapper}>
                <h2>Информация об опросе</h2>

                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.create_survey__form}>
                        <Input
                            width={'100%'}
                            isRequired={true}
                            name={'name'}
                            pattern={{
                                //@ts-ignore
                                value: /^[а-яА-Я]+$/u,
                                message: 'Введите название опроса на русской раскладке',
                            }}
                            placeholder={'Название опроса'}
                            label="Название опроса"
                        />
                        <div className={styles.create_survey__wrapper_imput}>
                            <Input
                                width={'50%'}
                                isRequired={false}
                                name={'deadline'}
                                pattern={{
                                    value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
                                    message: 'Введите дату в формате д.мес.год',
                                }}
                                placeholder={'Дата начала'}
                                label="Дата начала"
                            />
                            <Input
                                width={'50%'}
                                isRequired={false}
                                name={'deadline'}
                                pattern={{
                                    value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
                                    message: 'Введите дату в формате д.мес.год',
                                }}
                                placeholder={'Дата завершения'}
                                label="Дата завершения"
                            />
                        </div>

                        <Textarea
                            width={'100%'}
                            isRequired={false}
                            name={'requirement'}
                            pattern={{
                                //@ts-ignore
                                value: /^[а-яА-Я]+$/u,
                                message: 'Введите описание опроса на русской раскладке',
                            }}
                            placeholder={'Описание...'}
                            label="Описание"
                        />
                        <Radio
                            value="option1"
                            checked={selectedValueRadio === 'option1'}
                            onChange={handleRadioChange}
                            label="Анонимный опрос"
                        />
                        <span className={styles.create_survey__input_text}>
                            Тип опроса
                            <Selector options={options} value={selectedValue} onChange={handleChange} />
                        </span>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

