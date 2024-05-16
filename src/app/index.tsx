import './index.scss';
import { Routing } from 'pages/routing';
import { withProviders } from './providers';
import { useEffect } from 'react';
import { userApi } from 'shared/api/user';
import { SetCookie } from 'shared/libs/cookies';

function App() {
    useEffect(() => {
        userApi
            .registerUser({
                username: 'pluswhale',
                name: 'Name',
                surname: 'Surname',
                patronymic: 'Patronymic',
                email: 'pluswhale@test.com',
                password: '123Qweasd',
                confirmPassword: '123Qweasd',
            })
            .then((res) => {
                userApi
                    .loginUser({
                        login: 'pluswhale',
                        password: '123Qweasd',
                    })
                    .then((res) => {
                        if (res.data.accessToken) {
                            SetCookie('access_token', res.data.accessToken);
                        }
                    });
            });
    }, []);
    return (
        <div>
            <Routing />
        </div>
    );
}

export default withProviders(App);

