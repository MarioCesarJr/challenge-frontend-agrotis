import React from 'react';

import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';

import './config/ReactotronConfig';
import history from './services/history';
import Routes from './routes';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyle />
                <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
                <Header />
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;
