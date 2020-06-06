//REDUX 3 //

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger' // nice for debugging redux code

import createSagaMiddleware from 'redux-saga'
// redux-persist is allow browser to cache our store now
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'
import rootSaga from './rootSaga'


const sagaMiddleware = createSagaMiddleware() //SAGA1

const middlewares = [sagaMiddleware] //SAGA2

// to see logger only in develpoment environment
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

//PERSIST 1
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga) //SAGA4 & SAGA8

export const persistor = persistStore(store)

export default { store, persistor }