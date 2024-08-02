import { HorizontalNavigation } from '../../../shared/components/horizontal-navigation';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import { CreateSurveyForm } from '../../../features/create-survey-form';
import styles from './create-survey.module.scss';
import { CreateSurveyRightForm } from '../../../features/create-survey-form/create-survey-right-form';
import { useRef } from 'react';
import { Button } from 'shared/components/button/button';

const CreateSurvey = () => {
    const formRef = useRef<any>(null);

    const handleExternalSubmit = () => {
        if (formRef.current) {
            formRef.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        }
    };

    const navigation = [
        {
            title: 'Опрос',
            url: '/survey',
        },
        {
            title: 'Создание опроса',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <HorizontalNavigation navigation={navigation} />
            <div className={styles.container}>
                <CreateSurveyForm formRef={formRef} />
                <div className={styles.container__wrapper}>
                    <CreateSurveyRightForm />
                </div>
            </div>
            <div className={styles.container__wrap_btn}>
                <Button
                    onClick={handleExternalSubmit}
                    styles={{ width: 'fit-content', height: '40px' }}
                    text="Создать опрос"
                    view="default_bg"
                />
            </div>
        </DefaultContentWrapper>
    );
};

export default CreateSurvey;

