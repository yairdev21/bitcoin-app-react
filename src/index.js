import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import RootStore from './store/RootStore';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';

const rootStore = new RootStore();
rootStore.userStore.fetchUser()

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();