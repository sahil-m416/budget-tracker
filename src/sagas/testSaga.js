// ! Sagas Doesn't use any Normal Funtion 

//  ! insted they use generator function

// ? to make a funtion generator function, just put a * after the function keyword

// ? A generator function can return multiple values
import { call, cancel, cancelled, delay,  fork,  put, take, takeEvery } from 'redux-saga/effects'

function double(number){
    return number*2
}


export function* testSaga(){
    while(true){
        console.log('Starting saga')
        // // Dispatching the message
        const state = yield take('TEST_MESSAGE')
        const a = yield call(double, 2)
        const b = yield double(3)
        console.log(a, b)
        console.log(`Payload: ${state}`)
        console.log('Finished saga', state)
    }
}


function* doNothing(){
    console.log('I have been called')
    yield delay(1000)
    console.log('I am doing nothing')
}

export function* testSagaFork(){
    while(true){
        yield take('TEST_MESSAGE_2')
        yield fork(doNothing)
        yield fork(doNothing)
        yield fork(doNothing)
    }
}


export function* testSageTakeEveryProcess({payload}){
    console.log('Starting Process for index = ', payload)
    yield delay(3000)
    console.log('Endin Process for index = ', payload)
}


export function* testSageTakeEvery() {
    const {payload} = yield takeEvery("TEST_MESSAGE_3", testSageTakeEveryProcess)
    console.log('finished take every at index = ', payload)
}

export function* infinitySaga(){
    console.log('Starting infinitySaga')
    while (true) {
        try {
            console.log('Iniside infity sagan and inifity loop')
            yield delay(500)
        } catch(error){
            console.error('Error in infinitySaga', error)
        } finally{
            console.log('Fork cancelled ?', yield cancelled())
        }
    }
    console.log('Finished infinitySaga')
}

export function* testSagaCancelled(){
    yield take('TEST_MESSAGE_4')
    const handleCancel = yield fork(infinitySaga)
    yield delay(3000)
    yield cancel(handleCancel)
}
export function* dispatchTest() {
    let index = 0
    yield put({type:'TEST_MESSAGE_4', payload: index})

    // while(true){
    //     yield delay(500)
    //     // ? Listening to dispatches
    //     yield put({type:'TEST_MESSAGE_4', payload: index})
    //     index++
    // }
}