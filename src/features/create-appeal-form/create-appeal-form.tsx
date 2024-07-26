import { FormProvider, useForm } from 'react-hook-form';

import styles from './create-appeal-form.module.scss';
import { Button } from 'shared/components/button/button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { stagesSelector } from '../../redux/selectors/create-appeal';
import { useAppDispatch } from '../../redux/store';
import { addNewStage, removeStage, setStages } from '../../redux/slices/create-appeal';
import { useCreateAppeal } from 'shared/api/appeals/mutations';
import { QueryParameters, useFetchData } from 'shared/hooks/useFetchData';
import { fetchAllCompetences } from 'shared/api/candidates/thunks';
import { Stages } from 'entities/create-appeal-form/stages/stages';
import { Competences } from 'entities/create-appeal-form/competences/competences';
import { InfoAboutAppeal } from 'entities/create-appeal-form/info-about-appeal/info-about-appeal';

const queryParametersForFetchAllCompetences = {
    queryKey: 'fetchAllCompetencesForCreatingAppeal',
    queryThunk: fetchAllCompetences,
} as QueryParameters<any>;

export const CreateAppealForm = () => {
    const dispatch = useAppDispatch();
    const [newStage, setNewStage] = useState<string>('');
    const methods = useForm({ mode: 'onChange' });
    const createAppealMutation = useCreateAppeal();
    const [competence, setCompetence] = useState<any[]>([]);
    const stages = useSelector(stagesSelector);

    const competencesQuery = useFetchData(queryParametersForFetchAllCompetences);

    useEffect(() => {
        return () => {
            dispatch(setStages({ stages: [] as any }));
        };
    }, []);

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

        let body: any = {};

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

        createAppealMutation.mutate(body);
    };

    const onAddStage = () => {
        dispatch(addNewStage({ stageName: newStage }));
        setNewStage('');
    };

    const onRemoveStage = (stageId: string) => {
        dispatch(removeStage({ stageId }));
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.create_appeal}>
                <div className={styles.create_appeal__container}>
                    <div className={styles.create_appeal__vertical_block}>
                        <InfoAboutAppeal />
                        <Competences
                            competence={competence}
                            competencesOptions={competencesQuery?.data}
                            addCompetence={addCompetence}
                        />
                    </div>
                    <div className={styles.create_appeal__vertical_block}>
                        <Stages stages={stages} />
                    </div>
                </div>
                <Button
                    type={'submit'}
                    styles={{ width: '189px', alignSelf: 'flex-end' }}
                    view={'default_bg'}
                    text="Создать направление"
                />
            </form>
        </FormProvider>
    );
};

