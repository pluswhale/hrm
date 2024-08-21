import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { Button } from 'shared/components/button/button';

import { useNavigate, useParams } from 'react-router';
import { AppealInfo } from 'features/appeal-info';

import styles from './appeals-profile.module.scss';
import { AppealCandidates } from 'features/appeal-candidates';
import { fetchAppealById } from 'shared/api/appeals/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { Appeal } from 'shared/types/appeal.type';
import { useMediaQuery } from 'react-responsive';

const AppealsProfile = () => {
    const { id: appealId } = useParams();
    const navigate = useNavigate();
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
            title: 'Набор на практику',
            url: '/appeals',
        },
        {
            title: appealByIdQuery?.data?.name || '',
            url: undefined,
        },
    ];

    const onNavigateToEditAppeal = () => {
        navigate(`/edit/appeal/${appealId}`);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                {!isMobile && <Button onClick={onNavigateToEditAppeal} text="Редактировать" view="default_bg_white" />}
            </div>
            <AppealInfo appeal={appealByIdQuery?.data} />
            <> {appealByIdQuery?.data?.stages && <AppealCandidates stages={appealByIdQuery?.data?.stages || []} />}</>
        </DefaultContentWrapper>
    );
};

export default AppealsProfile;

