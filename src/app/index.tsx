import './index.scss';
import { Routing } from 'pages/routing';
import { withProviders } from './providers';
import { Navigation } from '../widgets/navigation';

function App() {
    return (
        <div >
            <Routing />
        </div>
    );
}

export default withProviders(App);

