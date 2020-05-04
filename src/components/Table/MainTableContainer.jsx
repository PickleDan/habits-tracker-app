import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { MainTable } from './MainTable'
import { fetchHabits } from '../../redux/habits/habitsRequests'

const MainTableContainer = (props) => {
    useEffect(() => {
        const test = props.fetchHabits({
            dateFrom: '2020-02-27',
            dateTo: '2020-06-27',
            page: 1,
            perPage: 20,
            token: props.token,
        })
    }, [])

    return <MainTable {...props} />
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
