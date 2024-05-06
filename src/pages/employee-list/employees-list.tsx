import { FC, ReactElement, useState } from 'react';
import SwitchTab from '../../shared/components/switch-tab/switch-tab';
import { EmployeesDataContainer } from '../../features/employees-list-data-container';
import { Filter } from '../../features/filter';
import { employeeListData, filterSet } from './constants';

import style from './employees-list.module.scss';
import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';

export const EmployeesList: FC = (): ReactElement => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [{ label: 'Текущие сотрудники' }, { label: 'Бывшие сотрудники' }];

    return (
        <DefaultContentWrapper>
            <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
            <div className={style.main_content}>
                <EmployeesDataContainer employees={employeeListData?.employees} />
                <Filter title="Поиск кандидата" filterSet={filterSet} onClickSearch={() => console.log('заглушка')} />
            </div>
        </DefaultContentWrapper>
    );
};
