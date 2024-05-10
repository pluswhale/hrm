import { DefaultContentWrapper } from 'entities/default-content-wrapper/default-content-wrapper';
import { HorizontalNavigation } from 'shared/components/horizontal-navigation';
import { APPEAl_DATA, CANDIDATES_ROWS } from './contants';
import { Button } from 'shared/components/button/button';

import { useNavigate } from 'react-router';
import { AppealInfo } from 'features/appeal-info';

import styles from './appeals-profile.module.scss';
import { AppealCandidates } from 'features/appeal-candidates';

const AppealsProfile = () => {
    const navigate = useNavigate();
    const navigation = [
        {
            title: 'Набор на практику',
            url: '/vacancies',
        },
        {
            title: APPEAl_DATA.title,
            url: undefined,
        },
    ];

    const onNavigateToEditVacancy = () => {
        navigate(`/edit/appeal/${APPEAl_DATA?.id}`);
    };

    return (
        <DefaultContentWrapper>
            <div className={styles.vacancy_navigation}>
                <HorizontalNavigation navigation={navigation} />
                <Button text="Редактировать" view="default_bg_white" />
            </div>
            <AppealInfo appeal={APPEAl_DATA} />
            <AppealCandidates candidateRows={CANDIDATES_ROWS} />
        </DefaultContentWrapper>
    );
};

export default AppealsProfile;

