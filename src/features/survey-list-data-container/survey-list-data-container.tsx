import { FC, ReactElement } from "react";
import { SurveyListContainerProps} from "./types";
import {SurveyCard} from "../../entities/survey-items/survey-card/survey-card";

export const SurveyListContainer: FC<SurveyListContainerProps> = ({Survey}): ReactElement => {
    return (
        <>
            {Survey?.length
                ? Survey?.map((surv) =>
                    <SurveyCard
                        key={surv?.id}
                        navigationUrl={`/vacancies/${surv.id}`}
                        title={surv?.title}
                        created_at={surv?.created_at}
                        deadline={surv?.deadline}
                        candidatesCount={surv?.candidatesCount}
                        id={surv?.id}
                        status={surv?.status}
                    />
                )
                : <p>Нет сотрудников</p>
            } 
        </>
    );
};
