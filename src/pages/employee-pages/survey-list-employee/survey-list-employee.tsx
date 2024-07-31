import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './survey-list-employee.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { Filter } from 'features/filter';
import { SurveyListContainer } from '../../../features/survey-list-data-container';
import { fetchAllSurveysForEmployee } from 'shared/api/surveys/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';

const SurveyListEmployee = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');
    const userId = useSelector(userDataSelector)?.id;

    const tabs = [{ label: 'Новые опросы' }, { label: 'Пройденные опросы' }];

    const queryParameters = {
        queryKey: 'fetchAllSurveysForEmployee',
        queryThunk: fetchAllSurveysForEmployee,
        queryThunkOptions: {
            employeeId: userId,
            search: searchValue,
            sort: activeTab === 0 ? 'current' : 'completed',
        },
    } as QueryParameters<any>;

    const surveysQuery = useFetchData(queryParameters);

    const onSearchData = (value: string) => {
        setSearchValue(value);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.survey}>
                <div className={styles.survey__action_buttons}>
                    <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                    <Button
                        styles={{ width: 'fit-content' }}
                        text="Новый опрос"
                        view="default_bg_white"
                        href="survey/create"
                    />
                </div>
                <div className={styles.survey__main_content}>
                    <div className={styles.survey__items}>
                        <SurveyListContainer surveys={surveysQuery?.data} />
                    </div>
                    <Filter
                        searchValue={searchValue}
                        onChangeSearchValue={onSearchData}
                        title="Найти опрос"
                        onToggleCheckboxInFilter={function (filterSetName: string, checkboxId: number): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default SurveyListEmployee;

