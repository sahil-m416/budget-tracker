import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import entriesTypes from './../actions/entries.actions'
export function* addEntrySaga(){
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntryBackend)
}

function* addEntryBackend({payload}){
    yield call(addEntry, payload)
    yield call(addEntryDetails, payload)
    yield put({type: entriesTypes.ADD_ENTRY_RESULT, payload})
}

async function addEntry({id, description}){
    await axios.post(`http://localhost:5000/entries`, {
        id,
        description
    })
}

async function addEntryDetails({id, value, isExpense}){
    await axios.post('http://localhost:5000/values', {
        id, value, isExpense
    })
}