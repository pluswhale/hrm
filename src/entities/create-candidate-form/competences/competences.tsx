import { FC } from 'react';
import styles from '../../../features/create-candidate-form/create-candidate-form.module.scss';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { Competence } from 'shared/types/competence.type';

type CompetencesProps = {
    competence: Competence[];
    competencesOptions: Competence[];
    addCompetence: (competence: Competence) => void;
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

