import React from 'react'
import './scss/App.scss'
import { Provider } from 'react-redux'
import { Switch } from 'react-router-dom'
import Table from './components/Table'
import { HABITS } from './models/mocks/habit'
import { DateUtils } from './utils/date'
import moment from 'moment'
import { Main } from './components/Main'
import Routes from './components/Router/Routes'

function App() {
    return <Routes />
}

export default App
