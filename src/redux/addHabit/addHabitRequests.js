import { fetchCreateHabitApi } from '../../api'
import { setNewHabitError, setNewHabitSuccess } from './addHabitActions'

export const fetchCreateHabit = ({ name, description }) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        try {
            const result = await fetchCreateHabitApi({
                name,
                description,
                token,
            })

            // const resultJSON = await result.json()
            // console.log(`SUCCESS! YOU'VE ADDED NEW HABIT`, resultJSON)
            console.log(result)

            if (result.statusText === 'Created') {
                dispatch(setNewHabitSuccess(true))
            } else dispatch(setNewHabitError(true))
        } catch (e) {
            dispatch(setNewHabitError(true))
        }
    }
}
