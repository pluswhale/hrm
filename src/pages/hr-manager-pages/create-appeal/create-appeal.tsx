import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './create-appeal.module.scss';
import { CreateAppealForm } from 'features/create-appeal-form';
import { useMediaQuery } from 'react-responsive';

const CreateAppeal = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigation = [
        {
            title: isMobile ? 'Практика' : 'Набор на практику',
            url: '/appeals',
        },
        {
            title: isMobile ? 'Создание практики' : 'Создание направления практики',
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

