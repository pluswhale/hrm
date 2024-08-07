import { useForm, FormProvider } from 'react-hook-form';

import styles from './create-candidate-form.module.scss';
import { Button } from 'shared/components/button/button';
import { useSelector } from 'react-redux';
import { experiencesSelector, educationsSelector } from '../../redux/selectors/create-candidate';
import { useCreateCandidate } from 'shared/api/candidates/mutations';
import { useState } from 'react';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCompetences } from 'shared/api/candidates/thunks';
import { Competences } from 'entities/create-candidate-form/competences/competences';
import { InfoAboutCandidate } from 'entities/create-candidate-form/info-about-candidate/info-about-candidate';
import { Experience } from 'entities/create-candidate-form/experiences/experiences';
import { Education } from 'entities/create-candidate-form/educations/educations';
import { Competence } from 'shared/types/competence.type';

function processFormState(formState: any) {
    const experiences: any[] = [];
    const educations: any[] = [];

    const experienceFields = {
        company_name: 'company-name',
        position: 'job-title',
        responsibilities_achievements: 'responsibilities-and-achievements',
        work_start_date: 'start-job-date',
        work_end_date: 'end-job-date',
    };

    const educationFields = {
        institution_name: 'university-name',
        faculty: 'faculty',
        specialisation: 'specialization',
        end_date: 'end-date',
    };

    const experienceKeys = Object.keys(experienceFields);
    const educationKeys = Object.keys(educationFields);

    Object.keys(formState).forEach((key) => {
        const indexMatch = key.match(/-(\d+)$/);
        if (indexMatch) {
            const index = parseInt(indexMatch[1], 10);
            const baseKey = key.replace(/-\d+$/, '');

            if (Object.values(experienceFields).includes(baseKey)) {
                if (!experiences[index]) experiences[index] = {};
                //@ts-ignore
                experiences[index][experienceKeys.find((k) => experienceFields[k] === baseKey)] = formState[key];
            } else if (Object.values(educationFields).includes(baseKey)) {
                if (!educations[index]) educations[index] = {};
                //@ts-ignore
                educations[index][educationKeys.find((k) => educationFields[k] === baseKey)] = formState[key];
            }
        }
    });

    return { experiences, educations };
}

const queryParametersForFetchAllCompetences = {
    queryKey: 'fetchAllCompetencesForCreatingCandidate',
    queryThunk: fetchAllCompetences,
} as QueryParameters<Competence[]>;

export const CreateCandidateForm = () => {
    const methods = useForm();
    const createCandidateMutation = useCreateCandidate();
    const educations = useSelector(educationsSelector);
    const experiences = useSelector(experiencesSelector);

    const [competence, setCompetence] = useState([]);

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
        // Отпралвять запрос на сервер для сохранения
        const body = {
            first_name: data.first_name,
            last_name: data.last_name,
            sur_name: data.sur_name,
        } as any;

        if (data.email) body.email = data.email;
        if (data.telegram) body.telegram = data.telegram;
        if (data.birth_day) body.birthday_date = data.birth_day;
        if (data.location) body.home_address = data.location;
        if (data.phone_number) body.phone_number = data.phone_number;

        const { experiences, educations } = processFormState(data);

        if (experiences) {
            body.experiences = experiences.filter(Boolean);
        }

        if (educations) {
            body.educations = educations.filter(Boolean);
        }

        if (competence?.length) {
            body.competences = competence.map((competence: any) => competence.id).filter(Boolean);
        }

        createCandidateMutation.mutate(body);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.create_candidate}>
                <div className={styles.create_candidate__container}>
                    <InfoAboutCandidate />
                    <Education educations={educations} />
                    <Experience experiences={experiences} />
                </div>
                {competencesQuery?.data && (
                    <Competences
                        competence={competence}
                        competencesOptions={competencesQuery?.data}
                        addCompetence={addCompetence}
                    />
                )}
                <Button type={'submit'} styles={{ width: '189px' }} view={'default_bg'} text="Создать" />
            </form>
        </FormProvider>
    );
};

