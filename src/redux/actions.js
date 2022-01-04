export const setAppState = (newState) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ATTR',
            attrName: 'appState',
            payload: newState,
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
