import moment from 'moment'

export const DAYS = (dateFrom, dateTo) => {
    const days = []
    const dateStart = moment(dateFrom)
    const dateEnd = moment(dateTo)
    while (dateEnd.diff(dateStart, 'days') >= 0) {
        days.push(moment(dateStart.format('YYYY-MM-DD')))
        dateStart.add(1, 'days')
    }
    return days
}
console.log(DAYS())
