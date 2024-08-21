import { FC, ReactElement } from 'react';
import { VacancyHeaderProps } from './types';
import styles from './vacancy-header.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router';
import editIcon from '../../../assets/Редактировать.svg';

export const VacancyHeader: FC<VacancyHeaderProps> = ({ title }): ReactElement => {
    const { id: vacancyId } = useParams();
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onNavigateToEditVacancy = () => {
        navigate(`/edit/vacancy/${vacancyId}`);
    };
    return (
        <div className={styles.vacancy_header}>
            <h3 className={styles.vacancy_header__title}>{title}</h3>
            {isMobile ? <img onClick={onNavigateToEditVacancy} src={editIcon} alt="edit icon" /> : null}
        </div>
    );
};

