import React from 'react'
import './scss/App.scss'
import { Provider } from 'react-redux'
import Routes from './components/Router/Routes'
import store from './redux/reduxStore'

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default App
