import { useForm, FormProvider } from 'react-hook-form';

import styles from './edit-candidate-form.module.scss';
import { Button } from 'shared/components/button/button';
import { useSelector } from 'react-redux';
import { experiencesSelector, educationsSelector } from '../../redux/selectors/create-candidate';
import { useUpdateCandidate } from 'shared/api/candidates/mutations';
import { FC, ReactElement, useEffect, useState } from 'react';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCompetences } from 'shared/api/candidates/thunks';
import { Competences } from 'entities/create-candidate-form/competences/competences';
import { InfoAboutCandidate } from 'entities/create-candidate-form/info-about-candidate/info-about-candidate';
import { Experience } from 'entities/create-candidate-form/experiences/experiences';
import { Education } from 'entities/create-candidate-form/educations/educations';
import { useAppDispatch } from '../../redux/store';
import { setCurrentEducations, setCurrentExperience } from '../../redux/slices/create-candidate';
import { Candidate } from 'shared/types/candidate.type';
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

type Props = {
    candidateData: Candidate;
};

export const EditCandidateForm: FC<Props> = ({ candidateData }): ReactElement => {
    const dispatch = useAppDispatch();
    const methods = useForm();
    const updateCandidateMutation = useUpdateCandidate();
    const educations = useSelector(educationsSelector);
    const experiences = useSelector(experiencesSelector);

    const [competence, setCompetence] = useState<Competence[]>([]);

    const competencesQuery = useFetchData(queryParametersForFetchAllCompetences);

    useEffect(() => {
        if (candidateData) {
            const { experiences, educations, birthday_date, home_address, ...rest } = candidateData;
            const formattedValues = { ...rest };

            //@ts-ignore
            formattedValues.birth_day = birthday_date;
            //@ts-ignore
            formattedValues.location = home_address;

            experiences.forEach((experience: any, index: number) => {
                Object.keys(experience).forEach((_) => {
                    //@ts-ignore
                    formattedValues[`company-name-${index + 1}`] = experience.company_name;
                    //@ts-ignore
                    formattedValues[`job-title-${index + 1}`] = experience.position;
                    //@ts-ignore
                    formattedValues[`responsibilities-and-achievements-${index + 1}`] =
                        experience.responsibilities_achievements;
                    //@ts-ignore
                    formattedValues[`start-job-date-${index + 1}`] = experience.work_start_date;
                    //@ts-ignore
                    formattedValues[`end-job-date-${index + 1}`] = experience.work_end_date;
                });
            });

            educations.forEach((education: any, index: number) => {
                Object.keys(education).forEach((_) => {
                    //@ts-ignore
                    formattedValues[`university-name-${index + 1}`] = education.institution_name;
                    //@ts-ignore
                    formattedValues[`faculty-${index + 1}`] = education.faculty;
                    //@ts-ignore
                    formattedValues[`specialization-${index + 1}`] = education.specialisation;
                    //@ts-ignore
                    formattedValues[`end-date-${index + 1}`] = education.end_date;
                });
            });

            methods.reset(formattedValues);
        }
    }, [candidateData, methods]);

    useEffect(() => {
        if (candidateData?.competences) {
            setCompetence(candidateData.competences);
        }
    }, [candidateData?.competences]);

    useEffect(() => {
        if (candidateData?.experiences) {
            dispatch(setCurrentExperience({ experiencesLength: candidateData.experiences.length }));
        }
    }, [candidateData.experiences, dispatch]);

    useEffect(() => {
        if (candidateData?.educations) {
            dispatch(setCurrentEducations({ educationsLength: candidateData.educations.length }));
        }
    }, [candidateData.educations, dispatch]);

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
            candidateId: candidateData?.id,
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

        updateCandidateMutation.mutate(body);
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

