import {
    fetchGetHabitsApi,
    fetchUpdateDayPotentialApi,
    fetchUpdateHabitApi,
    fetchUpdateHabitStatApi,
} from '../../api'
import { setHabits, setUpdateSuccess } from './habitsActions'
import { DateUtils } from '../../utils/date'
import moment from 'moment'

const weekDaysDates = DateUtils.getWeekDays(moment())
const dateFromDefault = weekDaysDates[0].format('YYYY-MM-DD')
const dateToDefault = weekDaysDates[6].format('YYYY-MM-DD')

export const fetchHabits = (
    dateFrom = dateFromDefault,
    dateTo = dateToDefault,
    page = 1,
    perPage = 10
) => {
    return async (dispatch, getState) => {
        console.log(dateFromDefault, dateToDefault)
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
            console.log(`SUCCESS! YOU'VE GOTTEN HABITS INFO: `, resultJSON)
            dispatch(setHabits(resultJSON))
        } catch (e) {
            console.error(e)
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
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchUpdateHabit = ({ id, name, description }) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token

        try {
            const result = await fetchUpdateHabitApi({
                id,
                name,
                description,
                token,
            })
            const resultJSON = await result.json()
            console.log(`'SUCCESS! YOU'VE UPDATED HABIT NAME: `, resultJSON)
            dispatch(setUpdateSuccess(true))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchUpdateDayPotential = ({ date, status }) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token

        try {
            const result = await fetchUpdateDayPotentialApi({
                date,
                status,
                token,
            })
            const resultJSON = await result.json()
            console.log(`'SUCCESS! YOU'VE UPDATED DAY POTENTIAL: `, resultJSON)
        } catch (e) {
            console.error(e)
        }
    }
}
