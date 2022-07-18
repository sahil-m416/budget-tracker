// ! Sagas Doesn't use any Normal Funtion 

//  ! insted they use generator function

// ? to make a funtion generator function, just put a * after the function keyword

// ? A generator function can return multiple values
import { delay, put, take } from 'redux-saga/effects'
export function* testSaga(){
    while(true){
        console.log('Starting saga')
        // // Dispatching the message
        const state = yield take('TEST_MESSAGE')
        console.log(`Payload: ${state}`)
        console.log('Finished saga')
    }
}

export function* dispatchTest() {
    while(true){
        yield delay(1000)
        // ? Listening to dispatches
        yield put({type:'TEST_MESSAGE', payload: 1000})
    }
}