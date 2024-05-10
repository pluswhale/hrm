import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';
import style from './requests.module.scss';
import { Filter } from '../../features/filter';
import RequestTable from '../../entities/request-items/request-table/request-table';
import { REQUESTS_DATA } from './constants';
import { useMediaQuery } from 'react-responsive';

const RequestsList = () => {
    const isLaptop = useMediaQuery({ maxWidth: '1500px' });

    return (
        <DefaultContentWrapper>
            <h2 className={style.container__title}>Запросы</h2>
            <div className={style.container}>
                {isLaptop && <Filter title="Найти запрос" />}
                <RequestTable requests={REQUESTS_DATA} />
                {!isLaptop && <Filter title="Найти запрос" />}
            </div>
        </DefaultContentWrapper>
    );
};

export default RequestsList;

