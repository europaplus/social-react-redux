import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const rerenderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props._state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store);
reportWebVitals();