import React from 'react';
import styles from './surveys-profile.module.scss';
import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from '../../shared/components/horizontal-navigation';
import { Button } from '../../shared/components/button/button';
import SurveyInfo from '../../features/survey-info/survey-info';
import { leftColumnData, rightColumnData } from './constants';


const SurveysProfile = () => {

    const navigation = [
        {
            title: 'Активные вакансии',
            url: '/survey',
        },
        {
            title: 'Название вакансии',
            url: '',
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.survey_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button text="Редактировать" type="default_bg_white" />
            </div>
            <div className={styles.survey_navigation__container}>
                <h2 className={styles.survey_navigation__container__title}>Название опроса</h2>
                <div className={styles.survey_navigation__wrap}>
                <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} />
                <SurveyInfo leftColumnData={leftColumnData} rightColumnData={rightColumnData} />
                </div>
            </div>
        </DefaultContentWrapper>
);
};

export default SurveysProfile;
