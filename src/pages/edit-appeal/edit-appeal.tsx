import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './edit-appeal.module.scss';
import { EditAppealForm } from 'features/edit-appeal-form';
import { APPEAl_DATA } from './constants';

const EditAppeal = () => {
    const navigation = [
        {
            title: 'Frontend-разработка',
            url: '/appeals/1',
        },
        {
            title: 'Редактирование направления практики',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.appeal_navigation}>
                <HorizontalNavigation navigation={navigation} />
            </div>
            <EditAppealForm appeal={APPEAl_DATA} />
        </DefaultContentWrapper>
    );
};

export default EditAppeal;

