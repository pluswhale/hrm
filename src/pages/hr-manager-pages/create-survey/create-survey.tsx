import { HorizontalNavigation } from '../../../shared/components/horizontal-navigation';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import { CreateSurveyForm } from '../../../features/create-survey-form';
import styles from './create-survey.module.scss';
import { CreateSurveyRightForm } from '../../../features/create-survey-form/create-survey-right-form';

const CreateSurvey = () => {
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
                <CreateSurveyForm />
                <div className={styles.container__wrapper}>
                    <CreateSurveyRightForm />
                </div>
            </div>
            <div className={styles.container__wrap_btn}></div>
        </DefaultContentWrapper>
    );
};

export default CreateSurvey;

