//REDUX 3 //

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger' // nice for debugging redux code

// redux-persist is allow browser to cache our store now
import { persistStore } from 'redux-persist'

import rootReducer from './root-reducer'

const middlewares = []

// to see logger only in develpoment environment
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

//PERSIST 1
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor }