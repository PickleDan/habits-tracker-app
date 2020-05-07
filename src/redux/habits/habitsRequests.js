import { fetchGetHabitsApi, fetchUpdateHabitStatApi } from '../../api'
import { setHabits } from './habitsActions'
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
        } catch (e) {
            alert('что-то пошло не так')
        }
    }
}
