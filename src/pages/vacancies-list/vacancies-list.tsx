import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import styles from './vacancies-list.module.scss'
import { SwitchTab } from 'shared/components/switch-tab';
import { useState } from 'react';
import { Button } from 'shared/components/button/button';
import { VacanciesDataContainer } from 'features/vacancies-list-data-container/vacancies-list-data-container';
import { vacanciesListData } from './constants';
import { Filter } from 'features/filter';

const VacanciesList = () => {
   const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [{ label: "Активные вакансии" }, { label: "Архив" }];

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancies}>
                <div className={styles.vacancies__action_buttons}>
                    <SwitchTab
                        tabs={tabs}
                        onTabClick={setActiveTab}
                        activeTab={activeTab}
                        design="default"
                    />
                    <Button
                        styles={{ width: 'fit-content' }}
                        text='Новая вакансия'
                        type='default_bg'

                    />
                    
                </div>
                <div className={styles.vacancies__main_content}>
                    <div className={styles.vacancies__items}>
                        <VacanciesDataContainer vacancies={vacanciesListData?.vacancies} />
                    </div>
                    <Filter
                        title='Поиск вакансий'
                        onClickSearch={() => console.log('заглушка')}
                    />
                    
                </div>
            </div>

        </DefaultContentWrapper>
    )
}

export default VacanciesList;