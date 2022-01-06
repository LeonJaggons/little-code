// Test import of a JavaScript module
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { Provider, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import store from './redux/store.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './styles/global-styles.css'
require('codemirror/mode/xml/xml')
require('codemirror/mode/javascript/javascript')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
