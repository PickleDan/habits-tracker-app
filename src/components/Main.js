import React from 'react'

import MainTableContainer from './Table/MainTableContainer'
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
            <MainTableContainer habits={HABITS} weekDays={weekDays} />
            <Footer />
        </>
    )
}
