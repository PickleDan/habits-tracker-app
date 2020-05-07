import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from './auth/authReducer'
import { signUpReducer } from './signUp/signUpReducer'
import { habitsReducer } from './habits/habitsReducer'
import { addHabitReducer } from './addHabit/addHabitReducer'
import { deleteHabitReduce } from './deleteHabit/deleteHabitReducer'

let reducers = combineReducers({
    auth: authReducer,
    signUp: signUpReducer,
    habitsData: habitsReducer,
    addHabit: addHabitReducer,
    deleteHabit: deleteHabitReduce,
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
