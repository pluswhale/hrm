import { FormProvider, useForm } from 'react-hook-form';

import styles from './create-vacancy-form.module.scss';
import { Button } from 'shared/components/button/button';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { setStages } from '../../redux/slices/create-vacancy';
import { EditVacancyFormProps } from './types';
import { useUpdateVacancy } from 'shared/api/vacancies/mutations';
import { fetchAllCompetences } from 'shared/api/candidates/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { InfoAboutVacancy } from 'entities/create-vacancy-form/info-about-vacancy/info-about-vacancy';
import { Competences } from 'entities/create-vacancy-form/competences/competences';
import { DescriptionVacancy } from 'entities/create-vacancy-form/description-vacancy/description-vacancy';
import { Stages } from 'entities/create-vacancy-form/stages/stages';
import { stagesSelector } from '../../redux/selectors/create-vacancy';
import { useSelector } from 'react-redux';

const queryParametersForFetchAllCompetences = {
    queryKey: 'fetchAllCompetencesForCreatingVacancy',
    queryThunk: fetchAllCompetences,
} as QueryParameters<any>;

export const EditVacancyForm: FC<EditVacancyFormProps> = ({ vacancy }): ReactElement => {
    const dispatch = useAppDispatch();
    const updateVacancyMutation = useUpdateVacancy();
    const [competence, setCompetence] = useState<any[]>([]);
    const stages = useSelector(stagesSelector);

    const competencesQuery = useFetchData(queryParametersForFetchAllCompetences);

    const formState: any = {};

    for (const key in vacancy) {
        if (
            vacancy[key] !== null &&
            vacancy[key] !== undefined &&
            vacancy[key] !== '' &&
            key !== 'stages' &&
            key !== 'competences' &&
            key !== 'candidates'
        ) {
            if (key === 'deadline') {
                const mirroredDate = vacancy?.[key]?.split('-')?.reverse()?.join('.');
                formState[key] = mirroredDate;
            } else {
                formState[key] = vacancy[key];
            }
        }
    }

    const methods = useForm({
        values: formState,
    });

    useEffect(() => {
        if (vacancy?.competences) {
            setCompetence(vacancy?.competences);
        }
    }, [vacancy?.competences]);

    useEffect(() => {
        if (vacancy?.stages?.length) dispatch(setStages({ stages: vacancy?.stages }));
    }, [dispatch, vacancy?.stages]);

    const onSubmit = (data: any) => {
        const body: any = {
            vacancyId: vacancy.id,
        };

        for (const key in data) {
            if (data[key] !== null && data[key] !== undefined && data[key] !== '') {
                body[key] = data[key];
            }
        }

        if (competence?.length) {
            body.competences = competence.map((competence) => competence.id).filter(Boolean);
        }

        if (stages?.length) {
            body.stages = stages.map((stage) => {
                return { name: stage.name };
            });
        }

        updateVacancyMutation.mutate(body);
    };

    const addCompetence = (newCompetence: any) => {
        if (typeof newCompetence === 'string') {
            //@ts-ignore
            setCompetence((prev) => [...prev, { name: newCompetence }]);
        } else {
            setCompetence(newCompetence);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.create_vacancy}>
                <div className={styles.create_vacancy__container}>
                    <div className={styles.create_vacancy__vertical_block}>
                        <InfoAboutVacancy />
                        <Competences
                            competence={competence}
                            competencesOptions={competencesQuery?.data}
                            addCompetence={addCompetence}
                        />
                    </div>

                    <div className={styles.create_vacancy__vertical_block}>
                        <DescriptionVacancy />
                        <Stages stages={stages} />
                    </div>
                </div>
                <Button
                    type={'submit'}
                    styles={{ width: '250px' }}
                    view={'default_bg'}
                    text="Отредактировать вакансию"
                />
            </form>
        </FormProvider>
    );
};

