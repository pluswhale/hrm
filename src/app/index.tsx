import './index.scss';
import { Routing } from 'pages/routing';
import { withProviders } from './providers';
import { useSelector } from 'react-redux';
import { userIsAuthorizedSelector } from '../redux/selectors/auth';
import { Login } from 'pages/login';

function App() {
    const isAuthorized = useSelector(userIsAuthorizedSelector);

    return <>{!isAuthorized ? <Login /> : <Routing />}</>;
}

export default withProviders(App);

