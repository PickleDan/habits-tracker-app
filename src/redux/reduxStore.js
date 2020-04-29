import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from './auth/authReducer'

let reducers = combineReducers({
    auth: authReducer,
})

const composeEnhancers =
    (typeof window != 'undefined' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
    compose

let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
