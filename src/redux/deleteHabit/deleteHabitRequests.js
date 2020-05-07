import { fetchDeleteHabitApi } from '../../api'
import { setSuccessDeleting } from './deleteHabitActions'

export const fetchDeleteHabit = ({ id }) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        try {
            const result = await fetchDeleteHabitApi({
                id,
                token,
            })

            console.log('result from fetchDeleteHabit', result)
            dispatch(setSuccessDeleting(true))
        } catch (e) {}
    }
}
