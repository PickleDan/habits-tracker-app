import React, { useState } from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import Style from './Statistics.module.scss'
import Container from 'react-bootstrap/Container'
import { DAYS } from '../../utils/getDatePeriod'
import moment from 'moment'

const Statistics = ({ fetchHabits, habitsData }) => {
    console.log('habitsData', habitsData)

    let dayPotentialSum

    if (habitsData.day_potential.length) {
        dayPotentialSum = habitsData.day_potential.reduce(
            (acc, potential) => acc + parseInt(potential.status),
            0
        )
    }

    const dayPotentialAverage =
        dayPotentialSum / habitsData.day_potential.length

    console.log('dayPotentialAverage', dayPotentialAverage)
    const filteredStats = habitsData.habits.map((habit) => {
        return {
            id: habit.id,
            stats: habit.stats.filter((stat) => stat.status !== 0),
        }
    })

    const forPercentageCalculate = filteredStats.map((el) => {
        return {
            id: el.id,
            all: el.stats.length,
            good: el.stats.filter(
                (item) => item.status === 1 || item.status === 3
            ).length,
        }
    })

    const percentages = forPercentageCalculate.map((el) => {
        return {
            percentages: Math.floor((el.good / el.all) * 100),
            id: el.id,
        }
    })

    const sortedPercentages = percentages.sort(
        (a, b) => b.percentages - a.percentages
    )

    const theBestHabit = habitsData.habits.find(
        (habit) => habit.id === sortedPercentages[0].id
    )

    const theLostHabit = habitsData.habits.find(
        (habit) =>
            habit.id === sortedPercentages[sortedPercentages.length - 1].id
    )
    const theBestHabitPercentage = sortedPercentages.length
        ? sortedPercentages[0].percentages
        : null

    const theLostHabitPercentage = sortedPercentages.length
        ? sortedPercentages[sortedPercentages.length - 1].percentages
        : null

    const [datePeriod, setDatePeriod] = useState({
        dateFrom: '',
        dateTo: '',
    })
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD')
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD')

    let days = DAYS(datePeriod.dateFrom, datePeriod.dateTo)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (days.length > 100) {
            alert(
                'Вы ввели слишком большой премежуток времени, максимальный период 3 месяца'
            )
        } else {
            fetchHabits(datePeriod.dateFrom, datePeriod.dateTo)
        }
    }

    const showPerMonth = (e) => {
        e.preventDefault()
        setDatePeriod({
            dateFrom: startOfMonth,
            dateTo: endOfMonth,
        })
        console.log('test', startOfMonth, endOfMonth)
        fetchHabits(startOfMonth, endOfMonth)
    }

    return (
        <>
            <HeaderContainer />
            <Container fluid className={Style.container}>
                <div className={Style.grid}>
                    <div className={Style.sidebar}>
                        <form onSubmit={handleSubmit}>
                            <h2 className={Style.title}>
                                Выберите период времени
                            </h2>
                            <div className={Style.timePeriod}>
                                <input
                                    onChange={(e) =>
                                        setDatePeriod({
                                            ...datePeriod,
                                            dateFrom: e.target.value,
                                        })
                                    }
                                    type="date"
                                />
                                <input
                                    onChange={(e) =>
                                        setDatePeriod({
                                            ...datePeriod,
                                            dateTo: e.target.value,
                                        })
                                    }
                                    type="date"
                                />
                                <button>Показать</button>
                                <button
                                    onClick={showPerMonth}
                                    className={Style.showForMonth}
                                >
                                    Показать за месяц
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={Style.statsView}>
                        <div>
                            <h2 className={Style.title}>Статистика</h2>
                            <div className={Style.indicators}>
                                <p className={Style.indicatorsItem}>
                                    Самая сильная привычка:{' '}
                                    <span className={Style.theBest}>
                                        {theBestHabit && theBestHabit.name}{' '}
                                        <b>
                                            {isNaN(theBestHabitPercentage)
                                                ? 0
                                                : theBestHabitPercentage}
                                            %
                                        </b>
                                    </span>
                                </p>
                                <p className={Style.indicatorsItem}>
                                    Самая слабая привычка:{' '}
                                    <span className={Style.theLost}>
                                        {theLostHabit && theLostHabit.name}{' '}
                                        <b>
                                            {isNaN(theLostHabitPercentage)
                                                ? 0
                                                : theLostHabitPercentage}
                                            %
                                        </b>
                                    </span>
                                </p>
                                <p className={Style.indicatorsItem}>
                                    Потенциал:{' '}
                                    <span className={Style.potential}>
                                        <b>
                                            {isNaN(dayPotentialAverage)
                                                ? ''
                                                : dayPotentialAverage.toFixed(
                                                      1
                                                  )}
                                        </b>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Привычка</th>
                            {habitsData.habits.map((habit) => {
                                return <th key={habit.id}>{habit.name}</th>
                            })}
                            <th>Потенциал дня</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>Норма</th>
                            {habitsData.habits.map((habit) => {
                                return (
                                    <th key={habit.id}>{habit.description}</th>
                                )
                            })}
                            <th>1...10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {days.map((day, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{day.format('DD.MM')}</th>
                                    {habitsData.habits.map((habit) => (
                                        <td key={habit.id}>
                                            {habit.stats.map((stat) =>
                                                stat.date ===
                                                day.format('YYYY-MM-DD') ? (
                                                    stat.status === 1 ? (
                                                        <div
                                                            key={stat.id}
                                                            className={
                                                                Style.greenTd
                                                            }
                                                        />
                                                    ) : stat.status === 2 ? (
                                                        <div
                                                            key={stat.id}
                                                            className={
                                                                Style.redTd
                                                            }
                                                        />
                                                    ) : stat.status === 3 ? (
                                                        <div
                                                            key={stat.id}
                                                            className={
                                                                Style.grayTd
                                                            }
                                                        />
                                                    ) : null
                                                ) : null
                                            )}
                                        </td>
                                    ))}

                                    {habitsData.day_potential.map(
                                        (potential) => {
                                            if (
                                                potential.date ===
                                                day.format('YYYY-MM-DD')
                                            ) {
                                                return (
                                                    <td>
                                                        {potential
                                                            ? potential.status
                                                            : ''}
                                                    </td>
                                                )
                                            }
                                        }
                                    )}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default Statistics
