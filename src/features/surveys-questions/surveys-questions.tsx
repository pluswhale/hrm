import React, { useState } from 'react';
import style from './surveys-questions.module.scss'
import { Radio } from '../../shared/components/radio';
import { Input } from '../../shared/components/input';
import { useForm } from 'react-hook-form';

const SurveysQuestions = () => {
    const [selectedSeveralValue, setSelectedSeveralValue] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<string>('');
    const { register, handleSubmit } = useForm();

    const handleRadioSeveralChange = (value: any) => {
        setSelectedSeveralValue(value);
    };

    const handleRadioChange = (value: any) => {
        setSelectedValue(value);
    };

    return (
        <div className={style.container}>
            <div className={style.container__wrapper}>
                <span className={style.container__input_text}>
                    Вопрос с одним варианто ответа
                    <div className={style.container__wrapper_radio}>
                        <Radio
                            value="option1"
                            checked={selectedValue === 'option1'}
                            onChange={handleRadioChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="option2"
                            checked={selectedValue === "option2"}
                            onChange={handleRadioChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="option3"
                            checked={selectedValue === "option3"}
                            onChange={handleRadioChange}
                            label="Имя Фамилия"
                        />
                    </div>
                </span>
            </div>
            <div className={style.container__wrapper}>
                <span className={style.container__input_text}>
                    Вопрос с одним варианто ответа
                    <div className={style.container__wrapper_radio}>
                        <Radio
                            value="option1"
                            checked={selectedSeveralValue === 'option1'}
                            onChange={handleRadioSeveralChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="option2"
                            checked={selectedSeveralValue === "option2"}
                            onChange={handleRadioSeveralChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="option3"
                            checked={selectedSeveralValue === "option3"}
                            onChange={handleRadioSeveralChange}
                            label="Имя Фамилия"
                        />
                    </div>
                </span>
            </div>
            <div className={style.container__wrapper}>
                <span className={style.container__input_text}>
                    Вопрос с одним варианто ответа
                    <div className={style.container__wrapper_radio}>
                        <Input
                            width={'100%'}
                            isRequired={false}
                            name={'deadline'}
                            register={register}
                            placeholder={'Вопрос'}
                        />
                    </div>
                </span>
            </div>
            <div className={style.container__wrapper}>
                <span className={style.container__input_text}>
                    Вопрос с одним варианто ответа
                    <div className={style.container__wrapper_radio}>
                        <Input
                            width={'100%'}
                            isRequired={false}
                            name={'deadline'}
                            register={register}
                            placeholder={'Вопрос'}
                        />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default SurveysQuestions;