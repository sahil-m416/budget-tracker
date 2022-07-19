import axios from "axios";
import { call, fork, put, take } from "redux-saga/effects";
import types from "./../actions/entries.actions";
import entriesTypes from './../actions/entries.actions'
export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES)
    console.log('Ineed to get all the entries now')
    const result = yield call(axios, 'http://localhost:5000/entries')
    console.log(result)
    yield put({type: types.POPULATE_ENTRIES, payload: result.data})
}

export function* getEntryDetails(id) {
    const {data} = yield call(axios, `http://localhost:5000/values/${id}`)
    console.log(data)
    yield put({type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: {id, entry:data}})
}

export function* getAllEntriesDetails(){
    const {payload} = yield take(entriesTypes.POPULATE_ENTRIES)
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id)
    }
}