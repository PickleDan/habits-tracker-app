import React, { useState } from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import Style from './Statistics.module.scss'
import Container from 'react-bootstrap/Container'

const Statistics = ({ fetchHabits, habitsData }) => {
    const [datePeriod, setDatePeriod] = useState({
        dateFrom: '',
        dateTo: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchHabits(datePeriod.dateFrom, datePeriod.dateTo)
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
                            </div>
                        </form>
                    </div>
                    <div className={Style.statsView}>
                        <h2 className={Style.title}>Статистика</h2>
                        <div className={Style.indicators}>
                            <p className={Style.indicatorsItem}>
                                Самая сильная привычка:{' '}
                                <span className={Style.theBest}>
                                    Чтение книг <b>90%</b>
                                </span>
                            </p>
                            <p className={Style.indicatorsItem}>
                                Самая слабая привычка:{' '}
                                <span className={Style.theLost}>
                                    Ранний подъем <b>30%</b>
                                </span>
                            </p>
                            <p className={Style.indicatorsItem}>
                                Потенциал{' '}
                                <span className={Style.potential}>
                                    <b>7.5</b>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default Statistics
