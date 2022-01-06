import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore/lite'

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

export const setUser = (newUser) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ATTR',
            attrName: 'user',
            payload: newUser,
        })
    }
}
export const setQuestions = (newQ) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_ATTR',
            attrName: 'allQuestions',
            payload: newQ,
        })
    }
}

export const getAllQuestions = () => {
    return (dispatch, getState) => {
        const questionCollection = collection(getState().firebaseDB, 'littlecode-challenges')
        const getDBQuestions = async () => {
            const questionDocs = await getDocs(questionCollection)
            const questions = []
            questionDocs.forEach((doc) => questions.push(doc.data()))
            return questions
        }

        getDBQuestions().then((data) => {
            dispatch(setQuestions(data))
        })
    }
}
export const getRandomQuestion = () => {}
