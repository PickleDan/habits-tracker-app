import { fetchGetHabitsApi, fetchUpdateHabitStatApi } from '../../api'
import { setHabits } from './habitsActions'
import { DateUtils } from '../../utils/date'
import moment from 'moment'

export const fetchHabits = ({ dateFrom, dateTo, page = 1, perPage = 10 }) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        try {
            const result = await fetchGetHabitsApi({
                dateFrom,
                dateTo,
                page,
                perPage,
                token,
            })

            const resultJSON = await result.json()
            console.log('SUCCESS! YOU GET HABITS INFO: ', resultJSON)
            dispatch(setHabits(resultJSON))
        } catch (e) {
            //todo
        }
    }
}

export const fetchUpdateHabitStat = ({ date, status, habitId }) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        try {
            const result = await fetchUpdateHabitStatApi({
                date,
                status,
                habitId,
                token,
            })
            const resultJSON = await result.json()
            console.log(`'SUCCESS! YOU'VE UPDATED HABIT STATUS: `, resultJSON)
            // dispatch(setHabits(resultJSON))
        } catch (e) {
            //todo
        }
    }
}
