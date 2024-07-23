import { FormProvider, useForm } from 'react-hook-form';

import { Button } from 'shared/components/button/button';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { stagesSelector } from '../../redux/selectors/create-vacancy';
import { useCreateVacancy } from 'shared/api/vacancies/mutations';
import { InfoAboutVacancy } from 'entities/create-vacancy-form/info-about-vacancy/info-about-vacancy';
import { Competences } from 'entities/create-vacancy-form/competences/competences';
import { fetchAllCompetences } from 'shared/api/candidates/thunks';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { DescriptionVacancy } from 'entities/create-vacancy-form/description-vacancy/description-vacancy';

import styles from './create-vacancy-form.module.scss';
import { Stages } from 'entities/create-vacancy-form/stages/stages';
import { states } from 'shared/states';

const queryParametersForFetchAllCompetences = {
    queryKey: 'fetchAllCompetencesForCreatingVacancy',
    queryThunk: fetchAllCompetences,
} as QueryParameters<any>;

export const CreateVacancyForm = () => {
    const methods = useForm({ mode: 'onChange' });
    const createVacancyMutation = useCreateVacancy();
    const [competence, setCompetence] = useState<any[]>([]);
    const stages = useSelector(stagesSelector);

    const competencesQuery = useFetchData(queryParametersForFetchAllCompetences);

    const addCompetence = (newCompetence: any) => {
        if (typeof newCompetence === 'string') {
            //@ts-ignore
            setCompetence((prev) => [...prev, { name: newCompetence }]);
        } else {
            setCompetence(newCompetence);
        }
    };

    const onSubmit = (data: any) => {
        const body: any = {};

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

        createVacancyMutation.mutate(body);
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
                <Button type={'submit'} styles={{ width: '189px' }} view={'default_bg'} text="Создать вакансию" />
            </form>
        </FormProvider>
    );
};

