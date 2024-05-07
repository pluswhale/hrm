import ReactDOM from 'react-dom/client';
import App from 'app';
import { RecoilRoot } from 'recoil';

import './index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RecoilRoot>
        <Provider store={store}>
            <App />
        </Provider>
    </RecoilRoot>,
);

