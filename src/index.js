import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import ApiService from "./apiService/apiService";
import ApiContext from './apiContext/apiContext'
const apiService = new ApiService()
ReactDOM.render(
        <ApiContext.Provider value={apiService}>
            <App/>
        </ApiContext.Provider>,
    document.getElementById('root')
);
