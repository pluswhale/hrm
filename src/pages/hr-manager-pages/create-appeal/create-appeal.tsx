import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './create-appeal.module.scss';
import { CreateAppealForm } from 'features/create-appeal-form';

const CreateAppeal = () => {
    const navigation = [
        {
            title: 'Набор на практику',
            url: '/appeals',
        },
        {
            title: 'Создание направления практики',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.appeal_navigation}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <CreateAppealForm />
        </DefaultContentWrapper>
    );
};

export default CreateAppeal;

