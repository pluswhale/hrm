import { FC, ReactElement } from 'react';
import { AppealHeaderProps } from './types';
import styles from './appeal-header.module.scss';
import editIcon from '../../../assets/Редактировать.svg';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router';

export const AppealHeader: FC<AppealHeaderProps> = ({ title }): ReactElement => {
    const { id: appealId } = useParams();
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onNavigateToEditAppeal = () => {
        navigate(`/edit/appeal/${appealId}`);
    };
    return (
        <div className={styles.appeal_header}>
            <h3 className={styles.appeal_header__title}>{title}</h3>
            {isMobile ? <img onClick={onNavigateToEditAppeal} src={editIcon} alt="edit icon" /> : null}
        </div>
    );
};

