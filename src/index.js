import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
//Tạo STORE
import { createStore } from 'redux';
import  appReducers  from './reducers/index';  // Import biến --> "export default"
import { Provider } from 'react-redux';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
);
//thêm router bọ App để sài hiệu ứng exit
const renderApp = () => {
    ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
            <Router>
                <App />
            </Router>
    </React.StrictMode>
    </Provider>,
        document.getElementById('root')
    );
};

renderApp();

