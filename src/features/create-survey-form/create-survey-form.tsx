import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './create-survey-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Radio } from '../../shared/components/radio';

export const CreateSurveyForm = () => {
    const { register, handleSubmit } = useForm();
    const [selectedValue, setSelectedValue] = useState<string>('');

    const onSubmit = (data: any) => {};
    const handleRadioChange = (value: any) => {
        setSelectedValue(value);
    };

    return (
        <div className={styles.create_survey}>
            <div className={styles.create_survey__form_wrapper}>
                <h2>Информация об опросе</h2>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.create_survey__form}>
                    <Input
                        width={'100%'}
                        isRequired={true}
                        name={'name'}
                        register={register}
                        placeholder={'Название опроса'}
                        label="Название опроса"
                    />
                    <div className={styles.create_survey__wrapper_imput}>
                        <Input
                            width={'50%'}
                            isRequired={false}
                            name={'deadline'}
                            register={register}
                            placeholder={'Дата начала'}
                            label="Дата начала"
                        />
                        <Input
                            width={'50%'}
                            isRequired={false}
                            name={'deadline'}
                            register={register}
                            placeholder={'Дата завершения'}
                            label="Дата завершения"
                        />
                    </div>

                    <Textarea
                        width={'100%'}
                        isRequired={false}
                        name={'requirement'}
                        register={register}
                        placeholder={'Описание...'}
                        label="Описание"
                    />
                    <Radio
                        value="option1"
                        checked={selectedValue === "option1"}
                        onChange={handleRadioChange}
                        label="Option 1"
                    />
                </form>
            </div>
        </div>
    );
};
