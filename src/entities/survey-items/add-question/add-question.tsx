import { FormProvider, useForm } from 'react-hook-form';

import styles from './add-question.module.scss';
import { Selector } from 'shared/components/selector';
import { Option } from 'shared/components/selector/types';
import { options } from 'features/create-survey-form/create-survey-right-form/constants';
import { useState } from 'react';
import { Input } from 'shared/components/input/input';
import { Button } from 'shared/components/button/button';
import { useAppDispatch } from '../../../redux/store';
import { addQuestion, Question_SURVEY } from '../../../redux/slices/create-survey';
import { DEFAULT_OPTIONS } from './constants';

export const AddQuestion = () => {
    const dispatch = useAppDispatch();
    const methods = useForm();

    const [questionValue, setQuestionValue] = useState<string>('');
    const [typeQuestion, setTypeQuestion] = useState<Option | null>({ value: 'one_variant', label: 'Один из списка' });

    const handleChangeTypeQuestion = (value: Option) => {
        setTypeQuestion(value);
    };

    const onAddQuestion = () => {
        const question = {
            question: questionValue,
            mode: 'read',
            type: typeQuestion?.value,
        } as Question_SURVEY;

        question.options = DEFAULT_OPTIONS[typeQuestion?.value || 'one_variant'];

        dispatch(addQuestion({ question }));
    };

    return (
        <FormProvider {...methods}>
            <div className={styles.container}>
                <span className={styles.container__input_text}>
                    Тип опроса
                    <Selector options={options} value={typeQuestion} onChange={handleChangeTypeQuestion} />
                </span>

                <Input
                    value={questionValue}
                    onChange={setQuestionValue}
                    width={'100%'}
                    isRequired={false}
                    name={'deadline'}
                    placeholder={'Вопрос'}
                    label="Вопрос"
                />
                <div className={styles.container__wrap_btn}>
                    <Button
                        onClick={onAddQuestion}
                        styles={{ width: 'fit-content', height: '40px' }}
                        text="Добавить"
                        view="default_bg"
                    />
                </div>
            </div>
        </FormProvider>
    );
};

