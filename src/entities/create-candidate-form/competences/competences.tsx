import { FC } from 'react';
import styles from '../../../features/create-candidate-form/create-candidate-form.module.scss';
import { Autocomplete, Chip, TextField } from '@mui/material';

type CompetencesProps = {
    competence: any;
    competencesOptions: Competence[];
    addCompetence: (competence: Competence) => void;
};

type Competence = {
    id: number;
    name: string;
};

export const Competences: FC<CompetencesProps> = ({ competence, competencesOptions, addCompetence }) => {
    return (
        <div className={styles.create_candidate__form_wrapper}>
            <h2 className={styles.create_candidate__title}>Компетенции</h2>
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
                    <TextField {...params} variant="filled" label="Комптенции" placeholder="Поиск" />
                )}
            />
        </div>
    );
};

