const initialState = {
    appTitle: 'LittleCode',
    appState: '',
    appSideCollapsed: false,
    signInVisible: false,
    userEmail: '',
    userPassword: '',
    signedIn: false,
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
