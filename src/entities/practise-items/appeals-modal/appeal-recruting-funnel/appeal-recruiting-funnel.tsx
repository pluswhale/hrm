import { FC, ReactElement } from 'react';
import closeIcon from '../../../../assets/close_icon.svg';
import { AppealRecruitingFunnelProps } from './types';

import styles from './appeal-recruiting-funnel.module.scss';
import { colorPalette } from './constants';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchConversionByAppealId } from 'shared/api/appeals/thunks';

export const AppealRecruitingFunnel: FC<AppealRecruitingFunnelProps> = ({ appealId, onClose }): ReactElement => {
    const queryParameters = {
        queryKey: 'fetchConversionForAppeal',
        queryThunk: fetchConversionByAppealId,
        queryThunkOptions: {
            appealId,
        },
    } as QueryParameters<any>;

    const conversionQuery = useFetchData(queryParameters);

    const sortedConversion = conversionQuery?.data?.sort((a: any, b: any) => {
        const relativeA = parseFloat(a.relativeConversion);
        const relativeB = parseFloat(b.relativeConversion);

        return relativeB - relativeA;
    });

    return (
        <div className={styles.vacancy_recruiting_funnel}>
            <div className={styles.vacancy_recruiting_funnel__container}>
                <div className={styles.vacancy_recruiting_funnel__title_and_close}>
                    <span className={styles.vacancy_recruiting_funnel__title}>Воронка рекрутига</span>
                    <img
                        onClick={onClose}
                        className={styles.vacancy_recruiting_funnel__close}
                        src={closeIcon}
                        alt="close icon"
                    />
                </div>

                <div className={styles.recruitment_funnel}>
                    <div className={styles.header}>
                        <div className={`${styles.column} ${styles.large}`}>Этап</div>
                        <div className={styles.column}>
                            Абсолютная <br /> конверсия
                        </div>
                        <div className={styles.column}>
                            Относительная <br /> конверсия
                        </div>
                    </div>
                    {sortedConversion?.map((item: any, index: number) => (
                        <div className={styles.row} key={index}>
                            <div className={`${styles.value} ${styles.large}`}>
                                <p className={styles.stage_value}>{item.stageName}</p>
                                <span style={{ backgroundColor: colorPalette(index) }} className={styles.color_bg}>
                                    {item?.candidateCount}
                                </span>
                            </div>
                            <div className={styles.value}>{Math.floor(item.absoluteConversion)}%</div>
                            <div className={styles.value}>{Math.floor(item.relativeConversion)}%</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

