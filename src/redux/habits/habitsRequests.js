import { fetchGetHabitsApi } from '../../api'
import { setHabits } from './habitsActions'

export const fetchHabits = ({ dateFrom, dateTo, page, perPage, token }) => {
    return async (dispatch, getState) => {
        try {
            const result = await fetchGetHabitsApi({
                dateFrom,
                dateTo,
                page,
                perPage,
                token,
            })

            const resultJSON = await result.json()
            console.log('SUCCESS!', resultJSON)
            dispatch(setHabits(resultJSON))
        } catch (e) {
            //todo
        }
    }
}
