import style from './candidates-list.module.scss';
import { Row } from 'react-bootstrap';
import { CandidatesDataContainer } from '../../features/candidates-data-container';
import { Filter } from '../../features/filter';
import { candidatesListData, filterSet } from './constants';
import { FC, ReactElement } from 'react';
import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';

const CandidatesList: FC = (): ReactElement => {
    return (
        <DefaultContentWrapper>
            <div className={style.container}>
                <h5 className={style.container__title}>Кандидаты</h5>

                <div className={style.container__wrapper}>
                    <CandidatesDataContainer candidates={candidatesListData?.candidates} />
                    <Filter
                        title="Найти кандидата"
                        filterSet={filterSet}
                        onClickSearch={() => console.log('заглушка')}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default CandidatesList;

