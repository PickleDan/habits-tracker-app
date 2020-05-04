import React from 'react'
import StatRow from './StatRow'
import { compose } from 'redux'
import { connect } from 'react-redux'

const StatRowContainer = (props) => {
    return <StatRow {...props} />
}

const mapStateToProps = (state) => {
    return {
        habitsData: state.habitsData,
    }
}

export default compose(connect(mapStateToProps, {}))(StatRowContainer)
