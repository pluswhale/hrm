import { FC, ReactElement, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import styles from './edit-survey-form.module.scss';
import { Input } from 'shared/components/input';
import { Textarea } from 'shared/components/textarea';
import { Option } from 'shared/components/selector/types';
import { Selector } from '../../shared/components/selector';
import { SURVEY_TYPE_OPTIONS } from './constants';
import { Button } from 'shared/components/button/button';
import { FormControlLabel, Switch } from '@mui/material';
import { useSelector } from 'react-redux';
import { questionsInCreateSurveySelector } from '../../redux/selectors/create-survey';
import { userDataSelector } from '../../redux/selectors/auth';
import { fetchAllEmployees } from 'shared/api/employees/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { CreateSurveyEmployeesList } from 'entities/survey-items/create-survey-employees-list/create-survey-employees-list';
import { PopupWithDarkOverlay } from 'shared/components/portal/popup-with-dark-overlay';
import { AddParticipant } from 'entities/add-participant/add-participant';
import { useUpdateSurvey } from 'shared/api/surveys/mutations';
import { Question_SURVEY } from 'redux/slices/create-survey';

type Props = {
    surveyData: any;
};

export const EditSurveyForm: FC<Props> = ({ surveyData }): ReactElement => {
    const formState: any = {};

    for (const key in surveyData) {
        if (
            surveyData[key] !== null &&
            surveyData[key] !== undefined &&
            surveyData[key] !== '' &&
            key !== 'stages' &&
            key !== 'competences' &&
            key !== 'candidates'
        ) {
            if (key === 'deadlineFrom' || key === 'deadlineTo') {
                const dateStr = surveyData[key];
                const date = new Date(dateStr);

                const formattedDate = date.toLocaleDateString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });
                formState[key] = formattedDate;
            } else {
                formState[key] = surveyData[key];
            }
        }
    }
    const methods = useForm({ values: formState });
    const [surveyType, setSurveyType] = useState<Option | null>({ value: 'general', label: 'Общий' });
    const [checkedAnonymous, setCheckedAnonymous] = useState<boolean>(false);
    const [isModalAddParticipantsOpened, setIsModalAddParticipantsOpened] = useState<boolean>(false);
    const [addedEmployeesIds, setAddedEmployeesIds] = useState<number[]>([]);
    const [addedEmployees, setAddedEmployees] = useState<any[]>([]);
    const questions = useSelector(questionsInCreateSurveySelector);
    const userId = useSelector(userDataSelector)?.id;
    const updateSurveyMutation = useUpdateSurvey();

    useEffect(() => {
        if (surveyData) {
            if (surveyData?.type) {
                if (surveyData.type === 'personal') {
                    setSurveyType(SURVEY_TYPE_OPTIONS?.[0]?.options?.[1]);
                } else {
                    setSurveyType(SURVEY_TYPE_OPTIONS?.[0]?.options?.[0]);
                }
            }

            setCheckedAnonymous(surveyData?.anonymous);

            if (surveyData?.targetedEmployees) {
                setAddedEmployees(surveyData?.targetedEmployees);
                setAddedEmployeesIds(surveyData?.targetedEmployees?.map((employee: any) => employee.id));
            }
        }
    }, [surveyData]);

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

    const onSubmit = (data: any) => {
        let body: any = {
            surveyId: surveyData?.id,
            takenCount: surveyType?.value === 'personal' ? addedEmployeesIds?.length : employeesQuery?.data?.length,
        };

        for (const key in data) {
            if (data[key] !== null && data[key] !== undefined && data[key] !== '' && key !== 'takenCount') {
                body[key] = data[key];
            }
        }

        body.anonymous = checkedAnonymous;

        if (surveyType?.value === 'personal' && addedEmployeesIds?.length) {
            body.targetedEmployeeIds = addedEmployeesIds;
        }

        if (questions?.length) {
            const questionsModifiedBody = questions?.map((question: any) => {
                if (question?.type === 'multiple_variants' || question?.type === 'one_variant') {
                    const { type, title, options } = question;

                    const modifiedOptions = options.map((option: any) => ({
                        id: option.id,
                        optionName: option.optionName,
                        type: option.type,
                    }));

                    return { id: question?.id, type, title, options: modifiedOptions };
                } else {
                    return { id: question?.id, title: question.title, type: question.type };
                }
            });
            body.questions = questionsModifiedBody;
        }

        body.type = surveyType?.value;

        updateSurveyMutation.mutate(body);
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
                            placeholder={'Название опроса'}
                            label="Название опроса"
                        />
                        <div className={styles.create_survey__wrapper_imput}>
                            <Input
                                width={'50%'}
                                isRequired={false}
                                name={'deadlineFrom'}
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
                                name={'deadlineTo'}
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
                                <Selector
                                    options={SURVEY_TYPE_OPTIONS}
                                    value={surveyType}
                                    onChange={handleChangeSurveyType}
                                />
                            </span>

                            {surveyType?.value === 'personal' && (
                                <Button
                                    type="button"
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
                        <Button
                            styles={{ width: 'fit-content', height: '40px' }}
                            text="Отредактировать опрос"
                            view="default_bg"
                        />
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

