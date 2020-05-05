import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { MainTable } from './MainTable'
import { fetchHabits } from '../../redux/habits/habitsRequests'

const MainTableContainer = ({
    habits,
    weekDays,
    token,
    habitsData,
    fetchHabits,
}) => {
    useEffect(() => {
        const test = fetchHabits({
            dateFrom: weekDays[0].format('YYYY-MM-DD'),
            dateTo: weekDays[6].format('YYYY-MM-DD'),
            page: 1,
            perPage: 20,
            token: token,
        })
    }, [])

    return <MainTable {...{ habits, weekDays, habitsData }} />
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        habitsData: state.habitsData,
    }
}

export default compose(connect(mapStateToProps, { fetchHabits }))(
    MainTableContainer
)
