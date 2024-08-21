import { Input } from 'shared/components/input/input';

import plusIcon from '../../../assets/plus_icon.svg';

import styles from '../../../features/create-candidate-form/create-candidate-form.module.scss';
import { useAppDispatch } from '../../../redux/store';
import { addNewEducation } from '../../../redux/slices/create-candidate';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

type EducationProps = {
    educations: any;
};

export const Education: FC<EducationProps> = ({ educations }) => {
    const dispatch = useAppDispatch();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onAddNewEducation = () => {
        dispatch(addNewEducation());
    };

    return (
        <>
            {educations &&
                educations.map((_: any, index: number) => (
                    <div key={index} className={styles.create_candidate__form_wrapper}>
                        <h2 className={styles.create_candidate__title}>Образование</h2>
                        <div className={styles.create_candidate__form}>
                            {isMobile ? (
                                <>
                                    <Input
                                        width={'100%'}
                                        isRequired={false}
                                        name={`university-name-${index + 1}`}
                                        placeholder={'Название учебного заведения'}
                                        label="Название учебного заведения"
                                    />
                                    <Input
                                        width={'100%'}
                                        isRequired={false}
                                        name={`faculty-${index + 1}`}
                                        placeholder={'Факультет'}
                                        label="Факультет"
                                    />
                                    <Input
                                        width={'100%'}
                                        isRequired={false}
                                        name={`specialization-${index + 1}`}
                                        placeholder={'Специализация'}
                                        label="Специализация"
                                    />
                                    <Input
                                        width={'100%'}
                                        isRequired={false}
                                        name={`end-date-${index + 1}`}
                                        placeholder={'Год окончания'}
                                        label="Год окончания"
                                    />
                                </>
                            ) : (
                                <>
                                    <div className={styles.create_candidate__form_row}>
                                        <Input
                                            width={'100%'}
                                            isRequired={false}
                                            name={`university-name-${index + 1}`}
                                            placeholder={'Название учебного заведения'}
                                            label="Название учебного заведения"
                                        />
                                        <Input
                                            width={'100%'}
                                            isRequired={false}
                                            name={`faculty-${index + 1}`}
                                            placeholder={'Факультет'}
                                            label="Факультет"
                                        />
                                    </div>
                                    <div className={styles.create_candidate__form_row}>
                                        <Input
                                            width={'49%'}
                                            isRequired={false}
                                            name={`specialization-${index + 1}`}
                                            placeholder={'Специализация'}
                                            label="Специализация"
                                        />
                                        <Input
                                            width={'20%'}
                                            isRequired={false}
                                            name={`end-date-${index + 1}`}
                                            placeholder={'Год окончания'}
                                            label="Год окончания"
                                        />
                                    </div>
                                </>
                            )}

                            <img
                                className={styles.create_candidate__form_plus_icon}
                                onClick={onAddNewEducation}
                                src={plusIcon}
                                alt="add new"
                            />
                        </div>
                    </div>
                ))}
        </>
    );
};

