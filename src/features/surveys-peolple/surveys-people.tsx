import { FC, ReactElement, useEffect, useState } from 'react';
import style from './surveys-people.module.scss';
import { Button } from '../../shared/components/button/button';
import logo from '../../assets/Ellipse 1.svg';
import { PopupWithDarkOverlay } from '../../shared/components/portal/popup-with-dark-overlay';
import { AddParticipant } from '../../entities/add-participant/add-participant';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllEmployees } from 'shared/api/employees/thunks';
import { Employee } from 'shared/types/employee.type';

type Props = {
    participants: Employee[];
};

const SurveysPeople: FC<Props> = ({ participants }): ReactElement => {
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

    useEffect(() => {
        if (participants) {
            if (participants) {
                setAddedEmployees(participants);
                setAddedEmployeesIds(participants?.map((employee: any) => employee.id));
            }
        }
    }, [participants]);

    const displayStatus = (status: string) => {
        let color;
        switch (status) {
            case 'Новый':
                color = '#6362E7';
                break;
            case 'Прошел':
                color = '#81C314';
                break;
            default:
                color = '#E7D10D';
        }

        return (
            <span style={{ backgroundColor: color, color: 'white' }} className={style.container__status}>
                {status}
            </span>
        );
    };

    const onOpenModalAddParticipants = () => {
        setIsModalAddParticipantsOpened(true);
    };

    const onCloseModalAddParticipants = () => {
        setIsModalAddParticipantsOpened(false);
    };

    const onAddInModal = (employeesIds: number[]) => {
        setAddedEmployeesIds(addedEmployeesIds.concat(employeesIds));
        const employees = employeesQuery?.data?.filter((employee: any) => employeesIds.includes(employee.id));

        setAddedEmployees(addedEmployees.concat(employees));

        onCloseModalAddParticipants();
    };

    return (
        <div className={style.container}>
            <div className={style.container__wrapper}>
                <Button
                    styles={{ width: 'fit-content', height: '40px' }}
                    text="Добавить участника"
                    view="default_bg"
                    onClick={onOpenModalAddParticipants}
                />
                <Button
                    styles={{ width: 'fit-content', height: '40px' }}
                    text="Напомнить об опросе"
                    view="default_bg"
                />
            </div>
            <div className={style.container__wraper_bootom}>
                <div className={style.container__wrapper_block}>
                    {participants &&
                        participants.map((participant) => (
                            <div key={participant?.id} className={style.container__card}>
                                <div className={style.container__card_head}>
                                    <img src={logo} alt="logo" className={style.container__img} />
                                    <div className={style.container__wrapper_card_title}>
                                        <h2
                                            className={style.container__title}
                                        >{`${participant?.last_name} ${participant?.first_name} ${participant?.sur_name}`}</h2>
                                        <span className={style.container__name}>{participant?.sub_position.title}</span>
                                    </div>
                                </div>
                                {displayStatus('Новый')}
                            </div>
                        ))}
                </div>
                {/* <Filter title="Найти сотрудника" /> */}
            </div>
            <PopupWithDarkOverlay onClose={onCloseModalAddParticipants} isOpened={isModalAddParticipantsOpened}>
                <AddParticipant
                    personsData={availableEmployees}
                    onAddInModal={onAddInModal}
                    onClose={onCloseModalAddParticipants}
                />
            </PopupWithDarkOverlay>
        </div>
    );
};

export default SurveysPeople;

