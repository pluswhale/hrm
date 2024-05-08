import React from 'react';
import { HorizontalNavigation } from '../../shared/components/horizontal-navigation';
import { DefaultContentWrapper } from '../../entities/default-content-wrapper/default-content-wrapper';
import { CreateSurveyForm } from '../../features/create-survey-form';
import styles from './create-survey.module.scss';
import { CreateSurveyRightForm } from '../../features/create-survey-form/create-survey-right-form';
import { Button } from '../../shared/components/button/button';

const CreateSurvey = () => {
    const navigation = [
        {
            title: 'Опрос',
            url: '/survey',
        },
        {
            title: 'Создание опроса',
            url: '',
        }
    ];
    return (
        <DefaultContentWrapper>
            <HorizontalNavigation navigation={navigation} />
            <div className={styles.container}>
                <CreateSurveyForm />
                <div>
                    <CreateSurveyRightForm />
                </div>

            </div>
            <div className={styles.container__wrap_btn}>
                <Button
                    styles={{ width: 'fit-content', height: '40px' }}
                    text="Создать опрос"
                    type="default_bg"
                />
            </div>
        </DefaultContentWrapper>
    );
};

export default CreateSurvey;