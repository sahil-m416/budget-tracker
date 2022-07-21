import entriesTypes from './../actions/entries.actions'
import { take, call, put } from 'redux-saga/effects'
import axios from 'axios'

export function* deleteEntrySaga(){
    while(true){
        const {payload} = yield take(entriesTypes.REMOVE_ENTRY)
        yield call(deleteEntry,payload.id)
        yield put({type: 'REMOVE_ENTRY_RESULT', payload: {id: payload.id}})
    }
}

async function deleteEntry(id){
    await axios.delete(`http://localhost:5000/entries/${id}`)
    await axios.delete(`http://localhost:5000/values/${id}`)
}