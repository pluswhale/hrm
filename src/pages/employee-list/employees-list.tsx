import { FC, ReactElement, useEffect, useState } from 'react';
import SwitchTab from '../../shared/components/switch-tab/switch-tab';
import { EmployeesDataContainer } from '../../features/employees-list-data-container';
import { Filter } from '../../features/filter';
import { employeeListData, filterSet } from './constants';

import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { useSelector } from 'react-redux';
import { rolesInFilterSelector, skillsInFilterSelector } from '../../redux/selectors/filter';
import { setFilters } from '../../redux/slices/filter';
import { useAppDispatch } from '../../redux/store';

import style from './employees-list.module.scss';

export const EmployeesList: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const [activeTab, setActiveTab] = useState<number>(0);
    const skillsForFilter = useSelector(skillsInFilterSelector);
    const rolesForFilter = useSelector(rolesInFilterSelector);
    const tabs = [{ label: 'Текущие сотрудники' }, { label: 'Бывшие сотрудники' }];

    const rolesForFilterFromData = employeeListData?.employees.map((employee, index: number) => ({
        id: index + 1,
        name: employee.role,
        isActive: false,
    }));

    const skillsForFilterFromData: { id: number; name: string; isActive: boolean }[] = [];

    employeeListData?.employees.forEach((employee, index: number) => {
        employee.skills.forEach((skill, index) => {
            skillsForFilterFromData.push({ id: index + 1, name: skill, isActive: false });
        });
    });

    useEffect(() => {
        dispatch(setFilters({ roles: rolesForFilterFromData, skills: skillsForFilterFromData }));
    }, []);

    const dataIntoFilter = filterSet.map((filterRow) => {
        if (filterRow.id === 1) {
            return { ...filterRow, checkboxes: rolesForFilter };
        } else {
            return { ...filterRow, checkboxes: skillsForFilter };
        }
    });

    return (
        <DefaultContentWrapper>
            <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
            <div className={style.main_content}>
                <EmployeesDataContainer employees={employeeListData?.employees} />
                <Filter
                    title="Поиск кандидата"
                    filterSet={dataIntoFilter}
                    onClickSearch={() => console.log('заглушка')}
                />
            </div>
        </DefaultContentWrapper>
    );
};

