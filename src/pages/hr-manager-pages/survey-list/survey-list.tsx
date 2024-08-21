import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './survey-list.module.scss';
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { Filter } from 'features/filter';
import { SurveyListContainer } from '../../../features/survey-list-data-container';
import { fetchAllSurveysForHR } from 'shared/api/surveys/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors/auth';
import { Survey } from 'shared/types/survey.type';
import { useMediaQuery } from 'react-responsive';
import { MobilePageHeader } from 'widgets/mobile-page-header/mobile-page-header';

const SurveyList = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>('');
    const userId = useSelector(userDataSelector)?.id;

    const tabs = [
        { label: isMobile ? 'Теущие' : 'Текущие опросы' },
        { label: isMobile ? 'Завершенные' : 'Завершенные опросы' },
    ];

    const queryParameters = {
        queryKey: 'fetchAllSurveysForHR',
        queryThunk: fetchAllSurveysForHR,
        queryThunkOptions: {
            hrManagerId: userId,
            search: searchValue,
            sort: activeTab === 0 ? 'current' : 'completed',
        },
    } as QueryParameters<Survey[]>;

    const surveysQuery = useFetchData(queryParameters);

    const onSearchData = (value: string) => {
        setSearchValue(value);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.survey}>
                {!isMobile ? (
                    <div className={styles.survey__action_buttons}>
                        <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                        <Button
                            styles={{ width: 'fit-content' }}
                            text="Новый опрос"
                            view="default_bg_white"
                            href="survey/create"
                        />
                    </div>
                ) : (
                    <MobilePageHeader
                        titlePage={'Опросы'}
                        filter={
                            <Filter
                                searchValue={searchValue}
                                onChangeSearchValue={setSearchValue}
                                title="Поиск опросов"
                            />
                        }
                        switchTabs={
                            <SwitchTab tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} design="default" />
                        }
                        searchValue={searchValue}
                        onChangeSearchValue={setSearchValue}
                    />
                )}

                <div className={styles.survey__main_content}>
                    <div className={styles.survey__items}>
                        {isMobile && (
                            <Button styles={{}} text="Новый опрос" view="default_bg_white" href="survey/create" />
                        )}
                        {surveysQuery?.data && <SurveyListContainer surveys={surveysQuery?.data} />}
                    </div>
                    {!isMobile ? (
                        <Filter
                            searchValue={searchValue}
                            onChangeSearchValue={onSearchData}
                            title="Найти опрос"
                            onToggleCheckboxInFilter={function (filterSetName: string, checkboxId: number): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    ) : null}
                </div>
            </div>
        </DefaultContentWrapper>
    );
};

export default SurveyList;

