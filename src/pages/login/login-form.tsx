import { Button, TextField } from '@mui/material';
import styles from './login.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { loginUserThunk } from 'shared/api/user/thunks';

export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onLogin = () => {
        const data = {
            email,
            password,
        };
        dispatch(loginUserThunk(data));
    };

    return (
        <div className={styles.login}>
            <div className={styles.login__container}>
                <TextField
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder="Пароль"
                    id="outlined-basic"
                    label="Пароль"
                    variant="outlined"
                    type="password"
                />
                <Button disabled={!email || !password} onClick={onLogin} variant="contained">
                    Войти
                </Button>
            </div>
        </div>
    );
};

