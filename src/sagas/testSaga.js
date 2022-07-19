// ! Sagas Doesn't use any Normal Funtion 

//  ! insted they use generator function

// ? to make a funtion generator function, just put a * after the function keyword

// ? A generator function can return multiple values
import { call, delay,  put, take } from 'redux-saga/effects'

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
        yield call(doNothing)
    }
}
export function* dispatchTest() {
    while(true){
        yield delay(5000)
        // ? Listening to dispatches
        yield put({type:'TEST_MESSAGE_2', payload: 1000})
    }
}