export const setAppState = (newState) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ATTR',
            attrName: 'appState',
            payload: newState,
        })
    }
}

export const toggleSignInVisible = () => {
    return (dispatch, getState) => {
        const isVis = getState().signInVisible
        dispatch({
            type: 'SET_ATTR',
            attrName: 'signInVisible',
            payload: !isVis,
        })
    }
}

export const toggleAppSideCollapsed = () => {
    return (dispatch, getState) => {
        const isCollapsed = getState().appSideCollapsed
        dispatch({
            type: 'SET_ATTR',
            attrName: 'appSideCollapsed',
            payload: !isCollapsed,
        })
    }
}

export const setUserLoggedIn = (isLoggedIn) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ATTR',
            attrName: 'signedIn',
            payload: isLoggedIn,
        })
    }
}
