import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import types from "./../actions/entries.actions";
import entriesTypes from './../actions/entries.actions'
export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES)
    console.log('Ineed to get all the entries now')
    const result = yield call(axios, 'http://localhost:5000/entries')
    console.log(result)
    yield put({type: types.POPULATE_ENTRIES, payload: result.data})
}