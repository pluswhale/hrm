import { HorizontalNavigation } from '../../../shared/components/horizontal-navigation';
import { DefaultContentWrapper } from '../../../entities/default-content-wrapper/default-content-wrapper';
import styles from './edit-survey.module.scss';
import { Button } from '../../../shared/components/button/button';
import { EditSurveyForm } from 'features/edit-survey-form';
import { EditSurveyRightForm } from 'features/edit-survey-form/edit-survey-right-form';

const EditSurvey = () => {
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
                <EditSurveyForm />
                <div className={styles.container__wrapper}>
                    <EditSurveyRightForm />
                </div>
            </div>
            <div className={styles.container__wrap_btn}>
                <Button
                    styles={{ width: 'fit-content', height: '40px' }}
                    text="Отредактировать опрос"
                    view="default_bg"
                />
            </div>
        </DefaultContentWrapper>
    );
};

export default EditSurvey;

