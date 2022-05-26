import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from './Components/App';
import reducers from './Reducers';

const store = createStore(reducers);

ReactDOM.createRoot(document.querySelector('#root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);