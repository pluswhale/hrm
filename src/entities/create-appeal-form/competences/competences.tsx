import { FC, useState } from 'react';
import styles from '../../../features/create-appeal-form/create-appeal-form.module.scss';
import { Input } from 'shared/components/input/input';
import { Button } from 'shared/components/button/button';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { useAddNewCompetence } from 'shared/api/candidates/mutations';
import { Competence } from 'shared/types/competence.type';

type CompetencesProps = {
    competence: Competence[];
    competencesOptions: Competence[];
    addCompetence: (competence: Competence) => void;
};

export const Competences: FC<CompetencesProps> = ({ competence, competencesOptions, addCompetence }) => {
    const addNewCompetenceMutation = useAddNewCompetence();
    const [newCompetence, setNewCompetence] = useState<string>('');

    const onAddNewCompetence = () => {
        addNewCompetenceMutation.mutate({ name: newCompetence });
        setNewCompetence('');
    };

    return (
        <div className={styles.create_appeal__form_wrapper}>
            <h2 className={styles.create_appeal__title}>Ключевые навыки</h2>
            <div className={styles.create_appeal__form}>
                <div className={styles.create_appeal__vertical_block}>
                    <Input
                        value={newCompetence}
                        onChange={setNewCompetence}
                        placeholder="Добавьте новый навык"
                        name={'new_competence'}
                    />
                    <Button type="button" view="default_bg" text="Добавить" onClick={onAddNewCompetence} />
                </div>
                <Autocomplete
                    value={competence}
                    onChange={(event, newValue: any) => {
                        addCompetence(newValue);
                    }}
                    sx={{ width: '100%', marginTop: '30px' }}
                    multiple
                    id="tags-filled"
                    options={competencesOptions}
                    getOptionLabel={(option) => option.name || option}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option.name || option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField {...params} variant="filled" label="Ключевые навыки" placeholder="Поиск" />
                    )}
                />
            </div>
        </div>
    );
};

