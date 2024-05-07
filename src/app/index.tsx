import './index.scss';
import { Routing } from 'pages/routing';
import { withProviders } from './providers';

function App() {
    return (
        <div style={{ display: 'flex' }}>
            <Routing />
        </div>
    );
}

export default withProviders(App);

