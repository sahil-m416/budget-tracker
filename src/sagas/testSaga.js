// ! Sagas Doesn't use any Normal Funtion 

//  ! insted they use generator function

// ? to make a funtion generator function, just put a * after the function keyword

// ? A generator function can return multiple values
import { delay } from 'redux-saga/effects'
export function* testSaga(){
    while(true){
        yield delay(1000)
        console.log('I am Reudx saga')
    }
}

export function* count() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}