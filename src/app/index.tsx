import './index.scss';
import { Routing } from 'pages/routing';
import { withProviders } from './providers';
import { useSelector } from 'react-redux';
import { userIsAuthorizedSelector } from '../redux/selectors/auth';
import { Login } from 'pages/login';
import { useEffect } from 'react';
import { GetCookie } from 'shared/libs/cookies';
import { useAppDispatch } from '../redux/store';
import { getUserDataThunk } from 'shared/api/user/thunks';

function App() {
    const dispatch = useAppDispatch();
    const isAuthorized = useSelector(userIsAuthorizedSelector);

    useEffect(() => {
        if (GetCookie('access_token')) {
            dispatch(getUserDataThunk());
        }
    }, [GetCookie('access_token')]);

    return <>{!isAuthorized ? <Login /> : <Routing />}</>;
}

export default withProviders(App);

