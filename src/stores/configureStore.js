import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import entriesReducers from "../reducers/entries.reducers"
import modalsReducer from '../reducers/modals.reducers'
import createSagaMidlleware from 'redux-saga'

const sagaMiddleware = createSagaMidlleware()
const middlewares = [sagaMiddleware]
const configureStore = () => {
    return createStore(combineReducers({
        entries: entriesReducers,
        modals: modalsReducer, 
    }),
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    )
}

export default configureStore