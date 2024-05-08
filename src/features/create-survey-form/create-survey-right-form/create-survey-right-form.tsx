import React, { useState } from 'react';
import styles from './create-survey-right-form.module.scss';
import { Radio } from '../../../shared/components/radio';
import redaction from '../../../assets/Редактировать.svg';
import Delete from '../../../assets/Удалить.svg';
import { Selector } from '../../../shared/components/selector';
import { options } from './constants';
import { Input } from '../../../shared/components/input';
import { useForm } from 'react-hook-form';
import { Button } from '../../../shared/components/button/button';

const CreateSurveyRightForm = () => {
    const { register, handleSubmit } = useForm();
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [selectedValueBtn, setSelectedValueBtn] = useState<string>('');
    const [selectedValueInject, setSelectedValueInject] = useState<string>('');

    const handleChange = (value: string) => {
        setSelectedValueBtn(value);
    };

    const handleRadioInjectChange = (value: any) => {
        setSelectedValueInject(value);
    };

    const handleRadioChange = (value: any) => {
        setSelectedValue(value);
    };
    return (
        <div className={styles.container__wrap}>
            <div className={styles.container}>
                <h2>Вопросы</h2>
                <div className={styles.container__wrapper}>
                    <span className={styles.container__span}>
                        Вопрос с одним вариантом ответа
                        <div className={styles.container__content_wrapper_img}>
                            <img className={styles.container__content_agree_img} src={redaction} alt="" />
                            <img className={styles.container__content_agree_img} src={Delete} alt="" />
                        </div>
                    </span>
                    <div className={styles.container__wrapper_radio}>
                        <Radio
                            value="option1"
                            checked={selectedValue === 'option1'}
                            onChange={handleRadioChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="option2"
                            checked={selectedValue === 'option2'}
                            onChange={handleRadioChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="option3"
                            checked={selectedValue === 'option3'}
                            onChange={handleRadioChange}
                            label="Имя Фамилия"
                        />
                    </div>
                </div>
                <div className={styles.container__wrapper}>
                    <span className={styles.container__span}>
                        Вопрос с одним вариантом ответа
                        <div className={styles.container__content_wrapper_img}>
                            <img className={styles.container__content_agree_img} src={redaction} alt="" />
                            <img className={styles.container__content_agree_img} src={Delete} alt="" />
                        </div>
                    </span>
                    <div className={styles.container__wrapper_radio}>
                        <Radio
                            value="inject1"
                            checked={selectedValueInject === 'inject1'}
                            onChange={handleRadioInjectChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="inject2"
                            checked={selectedValueInject === 'inject2'}
                            onChange={handleRadioInjectChange}
                            label="Имя Фамилия"
                        />
                        <Radio
                            value="inject3"
                            checked={selectedValueInject === 'inject3'}
                            onChange={handleRadioInjectChange}
                            label="Имя Фамилия"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <span className={styles.container__input_text}>
                    Тип опроса
                    <Selector options={options} value={selectedValueBtn} onChange={handleChange} />
                </span>
                <Input
                    width={'100%'}
                    isRequired={false}
                    name={'deadline'}
                    register={register}
                    placeholder={'Вопрос'}
                    label="Вопрос"
                />
                <div className={styles.container__wrap_btn}>
                    <Button styles={{ width: 'fit-content', height: '40px' }} text="Добавить" view="default_bg" />
                </div>
            </div>
        </div>
    );
};

export default CreateSurveyRightForm;
