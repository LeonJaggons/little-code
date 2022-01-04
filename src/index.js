// Test import of a JavaScript module
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import store from './redux/store.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: 'AIzaSyApnTEANORJN6GOD8_MoNPI6rs_1oQ-_3U',
    authDomain: 'little-code.firebaseapp.com',
    databaseURL: 'https://little-code-default-rtdb.firebaseio.com',
    projectId: 'little-code',
    storageBucket: 'little-code.appspot.com',
    messagingSenderId: '324587366458',
    appId: '1:324587366458:web:209298e2f4ce29c1eb6d03',
    measurementId: 'G-394F3JDPCH',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const test = collection(db, 'littlecode-tests')

async function fbTest() {
    const doc = await getDocs(test)
    let res = []
    doc.forEach((doc) => {
        res.push(doc.data())
    })
    return res
}
ReactDOM.render(
    <Provider store={store}>
        <App />
        {console.log(fbTest().then((data) => console.log(data)))}
    </Provider>,
    document.getElementById('root')
)
