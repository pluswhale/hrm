import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import styles from './edit-appeal.module.scss';
import { EditAppealForm } from 'features/edit-appeal-form';
import { useParams } from 'react-router-dom';
import { useDeleteAppeal, useSetAppealStatus } from 'shared/api/appeals/mutations';
import { fetchAppealById } from 'shared/api/appeals/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { Button } from 'shared/components/button/button';
import { Appeal } from 'shared/types/appeal.type';
import { useMediaQuery } from 'react-responsive';

const EditAppeal = () => {
    const { id: appealId } = useParams();
    const deleteAppealMutation = useDeleteAppeal();
    const setAppealStatusMutation = useSetAppealStatus();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const queryParameters = {
        queryKey: 'fetchAppealById',
        queryThunk: fetchAppealById,
        queryThunkOptions: {
            appealId,
        },
    } as QueryParameters<Appeal>;

    const appealByIdQuery = useFetchData(queryParameters);

    const navigation = [
        {
            title: appealByIdQuery?.data?.name || '',
            url: `/appeals/${appealId}`,
        },
        {
            title: 'Редактирование направления практики',
            url: undefined,
        },
    ];

    const navigationMobile = [
        {
            title: appealByIdQuery?.data?.name || '',
            url: `/appeals/${appealId}`,
        },
        {
            title: 'Редактирование',
            url: undefined,
        },
    ];

    return (
        <DefaultContentWrapper>
            <div className={styles.appeal_navigation}>
                <HorizontalNavigation navigation={isMobile ? navigationMobile : navigation} />
                <div className={styles.appeal_navigation__buttons}>
                    <Button
                        onClick={() =>
                            setAppealStatusMutation.mutate({
                                appealId: String(appealByIdQuery?.data?.id),
                                status: !appealByIdQuery?.data?.is_active,
                            })
                        }
                        view="default_bg_white"
                        text={appealByIdQuery?.data?.is_active ? 'Остановить' : 'Активировать'}
                    />
                    <Button
                        onClick={() => deleteAppealMutation.mutate(String(appealByIdQuery?.data?.id))}
                        view="default_bg_white"
                        text="Удалить"
                    />
                </div>
            </div>

            <>{appealByIdQuery?.data && <EditAppealForm appeal={appealByIdQuery?.data} />} </>
        </DefaultContentWrapper>
    );
};

export default EditAppeal;

