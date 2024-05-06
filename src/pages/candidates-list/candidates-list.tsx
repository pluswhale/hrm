import style from "./candidates-list.module.scss";
import {
    Row
} from "react-bootstrap";
import { CandidatesDataContainer } from "../../features/candidates-data-container";
import { Filter } from "../../features/filter";
import { candidatesListData, filterSet } from "./constants";
import { FC, ReactElement } from "react";

const CandidatesList: FC = (): ReactElement => {
    return (
        <>
            <div className={style.container}>
                <div className={"mt-3 mb-5 d-flex flex-row justify-content-start"}>
                    <h5 className={style.container__title}>
                        Кандидаты
                    </h5>
                </div>

                <div>
                    <Row className={style.container__wrapper}>
                        <CandidatesDataContainer candidates={candidatesListData?.candidates}/>
                        <Filter
                            title="Найти кандидата"
                            filterSet={filterSet}
                            onClickSearch={() => console.log('заглушка')}
                        />
                    </Row>
                </div>
            </div>
        </>
    )
}

export default CandidatesList;
