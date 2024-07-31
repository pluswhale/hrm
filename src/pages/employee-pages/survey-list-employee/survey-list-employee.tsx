import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './survey-list-employee.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useEffect, useState } from 'react';
import { Filter } from 'features/filter';
import { fetchAllSurveysForEmployee } from 'shared/api/surveys/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import { SurveyListEmployeeContainer } from 'features/survey-list-employee-data-container/survey-list-data-container';
import { useNavigate, useParams } from 'react-router';

const SurveyListEmployee = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');
    const userId = useSelector(userDataSelector)?.id;
    const { sort } = useParams();

    const tabs = [{ label: 'Новые опросы' }, { label: 'Пройденные опросы' }];

    useEffect(() => {
        if (sort === 'passed') {
            setActiveTab(1);
        } else {
            setActiveTab(0);
        }
    }, [sort]);

    const queryParameters = {
        queryKey: 'fetchAllSurveysForEmployee',
        queryThunk: fetchAllSurveysForEmployee,
        queryThunkOptions: {
            employeeId: userId,
            search: searchValue,
            sort: activeTab === 0 ? 'current' : 'passed',
        },
    } as QueryParameters<any>;

    const surveysQuery = useFetchData(queryParameters);

    const onSearchData = (value: string) => {
        setSearchValue(value);
    };

    const onPickTab = (index: number) => {
        setActiveTab(index);
        navigate(`/survey/employee/${index === 0 ? 'current' : 'passed'}`);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.survey}>
                <div className={styles.survey__action_buttons}>
                    <SwitchTab tabs={tabs} onTabClick={onPickTab} activeTab={activeTab} design="default" />
                </div>
                <div className={styles.survey__main_content}>
                    <div className={styles.survey__items}>
                        <SurveyListEmployeeContainer surveys={surveysQuery?.data} />
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

