import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store';
import reportWebVitals from "./reportWebVitals";
import {Provider} from "./StoreContext";

const rerenderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
};

store.subscribe(() => rerenderEntireTree(store.getState()));
rerenderEntireTree(store.getState());
reportWebVitals();