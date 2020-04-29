import React from 'react'

import { MainTable } from './Table'
import { Footer } from './Footer/Footer'
import { HABITS } from '../models/mocks/habit'
import { DateUtils } from '../utils/date'
import moment from 'moment'
import HeaderContainer from './Header/HeaderContainer'

export const Main = () => {
    const weekDays = DateUtils.getWeekDays(moment())
    return (
        <>
            <HeaderContainer />
            <MainTable habits={HABITS} weekDays={weekDays} />
            <Footer />
        </>
    )
}
