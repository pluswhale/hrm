import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import styles from './create-survey-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Radio } from '../../shared/components/radio';
import { Selector } from '../../shared/components/selector';
import { options } from './constants';
import { FormControlLabel, Switch } from '@mui/material';
import { Option } from 'shared/components/selector/types';
import { PopupWithDarkOverlay } from 'shared/components/portal/popup-with-dark-overlay';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { AddParticipant } from 'entities/add-participant/add-participant';
import { fetchAllEmployees } from 'shared/api/employees/thunks';
import { Button } from 'shared/components/button/button';
import { CreateSurveyEmployeesList } from 'entities/survey-items/create-survey-employees-list/create-survey-employees-list';

export const CreateSurveyForm = () => {
    const methods = useForm();
    const [surveyType, setSurveyType] = useState<Option | null>({ value: 'common', label: 'Общий' });
    const [checkedAnonymous, setCheckedAnonymous] = useState<boolean>(false);
    const [isModalAddParticipantsOpened, setIsModalAddParticipantsOpened] = useState<boolean>(false);
    const [addedEmployeesIds, setAddedEmployeesIds] = useState<number[]>([]);
    const [addedEmployees, setAddedEmployees] = useState<any[]>([]);

    const queryParameters = {
        queryKey: 'fetchAllEmployees',
        queryThunk: fetchAllEmployees,
        queryThunkOptions: {
            status: 'current',
        },
    } as QueryParameters<any>;

    const employeesQuery = useFetchData(queryParameters);

    const availableEmployees = employeesQuery?.data?.filter(
        (employee: any) => !addedEmployeesIds?.includes(employee.id),
    );

    const onOpenModalAddParticipants = () => {
        setIsModalAddParticipantsOpened(true);
    };

    const onCloseModalAddParticipants = () => {
        setIsModalAddParticipantsOpened(false);
    };

    const handleChangeAnonymousSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedAnonymous(event.target.checked);
    };

    const handleChangeSurveyType = (value: Option) => {
        setSurveyType(value);
    };

    const onSubmit = (data: any) => {
        let body: any = {
            type: surveyType?.value,
        };

        for (const key in data) {
            if (data[key] !== null && data[key] !== undefined && data[key] !== '') {
                body[key] = data[key];
            }
        }

        if (surveyType?.value === 'personal' && addedEmployeesIds?.length) {
            body.employeesIds = addedEmployeesIds;
        }
    };

    const onDeleteEmployee = (employeeId: number) => {
        const filteredEmployeesId = addedEmployeesIds.filter((id: number) => id !== employeeId);
        const filteredEmployees = addedEmployees.filter((e: any) => e.id !== employeeId);

        setAddedEmployees(filteredEmployees);
        setAddedEmployeesIds(filteredEmployeesId);
    };

    const onAddInModal = (employeesIds: number[]) => {
        setAddedEmployeesIds(addedEmployeesIds.concat(employeesIds));
        const employees = employeesQuery?.data?.filter((employee: any) => employeesIds.includes(employee.id));

        setAddedEmployees(addedEmployees.concat(employees));

        onCloseModalAddParticipants();
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
                                name={'deadline_from'}
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
                                name={'deadline_to'}
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
                            name={'description'}
                            pattern={{
                                //@ts-ignore
                                value: /^[а-яА-Я]+$/u,
                                message: 'Введите описание опроса на русской раскладке',
                            }}
                            placeholder={'Описание...'}
                            label="Описание"
                        />
                        <FormControlLabel
                            value="top"
                            control={
                                <Switch
                                    checked={checkedAnonymous}
                                    onChange={handleChangeAnonymousSwitch}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="Анонимный опрос"
                            labelPlacement="end"
                        />

                        <span className={styles.create_survey__input_text}>
                            <span className={styles.create_survey__input_text__selector}>
                                Тип опроса
                                <Selector options={options} value={surveyType} onChange={handleChangeSurveyType} />
                            </span>

                            {surveyType?.value === 'personal' && (
                                <Button
                                    onClick={onOpenModalAddParticipants}
                                    view="default_bg"
                                    text="Добавить участников"
                                    styles={{ width: 'fit-content' }}
                                />
                            )}
                        </span>
                        {surveyType?.value === 'personal' && addedEmployeesIds?.length ? (
                            <CreateSurveyEmployeesList employees={addedEmployees} onDeleteEmployee={onDeleteEmployee} />
                        ) : null}
                        <PopupWithDarkOverlay
                            onClose={onCloseModalAddParticipants}
                            isOpened={isModalAddParticipantsOpened}
                        >
                            <AddParticipant
                                personsData={availableEmployees}
                                onAddInModal={onAddInModal}
                                onClose={onCloseModalAddParticipants}
                            />
                        </PopupWithDarkOverlay>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

