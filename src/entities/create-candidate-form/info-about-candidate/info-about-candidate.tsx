import { Input } from 'shared/components/input/input';
import styles from '../../../features/create-candidate-form/create-candidate-form.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Selector } from 'shared/components/selector';
import { GENDER_SELECTOR_OPTIONS } from './constants';
import { FC, ReactElement } from 'react';

import { Option } from 'shared/components/selector/types';

type Props = {
    genderValue: Option | null;
    handleChangeGenderValue: (value: Option) => void;
};

export const InfoAboutCandidate: FC<Props> = ({ genderValue, handleChangeGenderValue }): ReactElement => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className={styles.create_candidate__form_wrapper}>
            <h2 className={styles.create_candidate__title}>Инормация о кандидате</h2>
            <div className={styles.create_candidate__form}>
                {isMobile ? (
                    <>
                        <Input
                            width={'100%'}
                            isRequired={true}
                            name={'last_name'}
                            placeholder={'Фамилия'}
                            label="Фамилия"
                        />
                        <Input width={'100%'} isRequired={true} name={'first_name'} placeholder={'Имя'} label="Имя" />

                        <Input
                            width={'100%'}
                            isRequired={false}
                            name={'sur_name'}
                            placeholder={'Отчество'}
                            label="Отчество"
                        />
                        <span className={styles.create_candidate__selector}>
                            Пол
                            <Selector
                                options={GENDER_SELECTOR_OPTIONS}
                                value={genderValue}
                                onChange={handleChangeGenderValue}
                            />
                        </span>
                        <Input
                            width={'100%'}
                            isRequired={false}
                            name={'birth_day'}
                            placeholder={'Дата рождения'}
                            label="Дата рождения"
                        />
                        <Input
                            width={'100%'}
                            isRequired={false}
                            name={'location'}
                            placeholder={'Место проживания'}
                            label="Место проживания"
                        />
                        <Input
                            width={'100%'}
                            isRequired={true}
                            name={'email'}
                            pattern={{
                                //@ts-ignore
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Введите корректный email',
                            }}
                            placeholder={'Почта'}
                            label="Почта"
                        />
                        <Input
                            width={'100%'}
                            isRequired={true}
                            name={'phone_number'}
                            pattern={{
                                value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                                message: 'Введите номер телефона в формате +8234567890',
                            }}
                            placeholder={'Номер телефона'}
                            label="Номер телефона"
                        />
                        <Input
                            width={'100%'}
                            isRequired={false}
                            name={'telegram'}
                            pattern={{
                                value: /@[a-zA-Z0-9_]{5,32}/,
                                message: 'Введите имя пользователя Telegram в формате @username',
                            }}
                            placeholder={'Telegram'}
                            label="Telegram"
                        />
                    </>
                ) : (
                    <>
                        <div className={styles.create_candidate__form_row}>
                            <Input
                                width={'100%'}
                                isRequired={true}
                                name={'last_name'}
                                placeholder={'Фамилия'}
                                label="Фамилия"
                            />
                            <Input
                                width={'100%'}
                                isRequired={true}
                                name={'first_name'}
                                placeholder={'Имя'}
                                label="Имя"
                            />

                            <Input
                                width={'100%'}
                                isRequired={false}
                                name={'sur_name'}
                                placeholder={'Отчество'}
                                label="Отчество"
                            />
                        </div>
                        <div className={styles.create_candidate__form_row}>
                            <Input
                                width={'32.3%'}
                                isRequired={false}
                                name={'birth_day'}
                                placeholder={'Дата рождения'}
                                label="Дата рождения"
                            />
                            <Input
                                width={'32.3%'}
                                isRequired={false}
                                name={'location'}
                                placeholder={'Место проживания'}
                                label="Место проживания"
                            />
                            <span className={styles.create_candidate__selector}>
                                Пол
                                <Selector
                                    options={GENDER_SELECTOR_OPTIONS}
                                    value={genderValue}
                                    onChange={handleChangeGenderValue}
                                />
                            </span>
                        </div>
                        <div className={styles.create_candidate__form_row}>
                            <Input
                                width={'100%'}
                                isRequired={true}
                                name={'email'}
                                pattern={{
                                    //@ts-ignore
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Введите корректный email',
                                }}
                                placeholder={'Почта'}
                                label="Почта"
                            />
                            <Input
                                width={'100%'}
                                isRequired={true}
                                name={'phone_number'}
                                pattern={{
                                    value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                                    message: 'Введите номер телефона в формате +8234567890',
                                }}
                                placeholder={'Номер телефона'}
                                label="Номер телефона"
                            />
                            <Input
                                width={'100%'}
                                isRequired={false}
                                name={'telegram'}
                                pattern={{
                                    value: /@[a-zA-Z0-9_]{5,32}/,
                                    message: 'Введите имя пользователя Telegram в формате @username',
                                }}
                                placeholder={'Telegram'}
                                label="Telegram"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

