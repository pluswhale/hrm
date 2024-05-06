import ReactDOM from 'react-dom/client';
import App from 'app';
import { RecoilRoot } from 'recoil';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
);

