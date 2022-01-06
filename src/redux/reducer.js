import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
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

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

const initialState = {
    appTitle: 'LittleCode',
    appState: '',
    appSideCollapsed: false,
    user: null,
    database: db,
    signInVisible: false,
    userEmail: '',
    userPassword: '',
    signedIn: false,
    firebaseDB: db,
    currQuestion: {},
    allQuestions: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ATTR':
            return { ...state, [action.attrName]: action.payload }
        default:
            return initialState
    }
}

export default reducer
