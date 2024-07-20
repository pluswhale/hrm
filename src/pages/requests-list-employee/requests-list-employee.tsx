import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';
import style from './requests-list-employee.module.scss';
import { Filter } from '../../features/filter';
import RequestTable from '../../entities/request-items/request-table/request-table';
import { filterSet, REQUESTS_DATA } from './constants';
import { useMediaQuery } from 'react-responsive';

const RequestsListEmployee = () => {
    const isLaptop = useMediaQuery({ maxWidth: '1500px' });

    return (
        <DefaultContentWrapper>
            <h2 className={style.container__title}>Запросы</h2>
            <div className={style.container}>
                {isLaptop && (
                    <Filter
                        filterSet={filterSet}
                        title="Найти запрос"
                        onToggleCheckboxInFilter={function (filterSetName: string, checkboxId: number): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                )}
                <RequestTable requests={REQUESTS_DATA} />
                {!isLaptop && (
                    <Filter
                        filterSet={filterSet}
                        title="Найти запрос"
                        onToggleCheckboxInFilter={function (filterSetName: string, checkboxId: number): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                )}
            </div>
        </DefaultContentWrapper>
    );
};

export default RequestsListEmployee;

