import { FormProvider, useForm } from 'react-hook-form';

import styles from './edit-appeal-form.module.scss';
import { Button } from 'shared/components/button/button';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { stagesSelector } from '../../redux/selectors/create-appeal';
import { useAppDispatch } from '../../redux/store';
import { setStages } from '../../redux/slices/create-appeal';
import { EditAppealProps } from './types';
import { useUpdateAppeal } from 'shared/api/appeals/mutations';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCompetences } from 'shared/api/candidates/thunks';
import { InfoAboutAppeal } from 'entities/create-appeal-form/info-about-appeal/info-about-appeal';
import { Competences } from 'entities/create-appeal-form/competences/competences';
import { Stages } from 'entities/create-appeal-form/stages/stages';
import { Competence } from 'shared/types/competence.type';
import { format } from 'date-fns/format';

const queryParametersForFetchAllCompetences = {
    queryKey: 'fetchAllCompetencesForUpdatingAppeal',
    queryThunk: fetchAllCompetences,
} as QueryParameters<Competence[]>;

export const EditAppealForm: FC<EditAppealProps> = ({ appeal }): ReactElement => {
    const dispatch = useAppDispatch();
    const stages = useSelector(stagesSelector);
    const [competence, setCompetence] = useState<any[]>([]);
    const updateAppealMutation = useUpdateAppeal();
    const [dateEnd, setDateEnd] = useState<Date | null>(null);

    const competencesQuery = useFetchData(queryParametersForFetchAllCompetences);

    const formState: any = {};

    for (const key in appeal) {
        if (
            //@ts-ignore
            appeal[key] !== null &&
            //@ts-ignore
            appeal[key] !== undefined &&
            //@ts-ignore
            appeal[key] !== '' &&
            key !== 'stages' &&
            key !== 'competences' &&
            key !== 'candidates' &&
            key !== 'deadline'
        ) {
            //@ts-ignore
            formState[key] = appeal[key];
        }
    }

    const methods = useForm({
        mode: 'onChange',
        values: formState,
    });

    useEffect(() => {
        return () => {
            dispatch(setStages({ stages: [] as any }));
        };
    }, []);

    useEffect(() => {
        if (appeal?.deadline) {
            setDateEnd(appeal?.deadline);
        }
    }, [appeal]);

    useEffect(() => {
        if (appeal?.competences) {
            setCompetence(appeal?.competences);
        }
    }, [appeal?.competences]);

    useEffect(() => {
        if (appeal?.stages?.length) dispatch(setStages({ stages: appeal?.stages }));
    }, [dispatch, appeal?.stages]);

    const onSubmit = (data: any) => {
        let body: any = {
            appealId: appeal?.id,
        };
        for (const key in data) {
            if (data[key] !== null && data[key] !== undefined && data[key] !== '' && key !== 'deadline') {
                body[key] = data[key];
            }
        }

        if (dateEnd) {
            body.deadline = format(dateEnd, 'dd.MM.yyyy');
        }

        if (competence?.length) {
            body.competences = competence.map((competence) => competence.id).filter(Boolean);
        }

        if (stages?.length) {
            body.stages = stages.map((stage) => {
                return { name: stage.name };
            });
        }

        updateAppealMutation.mutate(body);
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
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.create_appeal}>
                <div className={styles.create_appeal__container}>
                    <div className={styles.create_appeal__vertical_block}>
                        <InfoAboutAppeal dateEnd={dateEnd} setDateEnd={setDateEnd} />
                        {competencesQuery?.data && (
                            <Competences
                                competence={competence}
                                competencesOptions={competencesQuery?.data}
                                addCompetence={addCompetence}
                            />
                        )}
                    </div>
                    <div className={styles.create_appeal__vertical_block}>
                        <Stages stages={stages} />
                    </div>
                </div>
                <Button
                    type={'submit'}
                    styles={{ width: '189px', alignSelf: 'flex-end' }}
                    view={'default_bg'}
                    text="Сохранить"
                />
            </form>
        </FormProvider>
    );
};

