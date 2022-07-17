import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import entriesReducers from "../reducers/entries.reducers"

const configureStore = () => {
    return createStore(combineReducers({
        entries: entriesReducers,
    }),
    composeWithDevTools()
    )
}

export default configureStore