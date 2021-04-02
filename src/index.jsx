import './index.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from './Store/reducer'
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)