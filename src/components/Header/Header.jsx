import React, { useState } from 'react'
import Styles from './Header.module.scss'
import { Container } from 'react-bootstrap'
import cn from 'classnames'
import { fetchGetProfileDataApi } from '../../api'
import { getGreetingTime } from '../../utils/getGreetingTime'
import moment from 'moment'

export const Header = ({ setAuthToken, setLoggedIn, token }) => {
    const [name, setName] = useState('')

    const logOut = () => {
        setAuthToken('')
        setLoggedIn(false)
    }
    const getUserName = async (token) => {
        const response = await fetchGetProfileDataApi(token)
        const responseJSON = await response.json()
        setName(responseJSON.name)
    }

    getUserName(token)

    const greeting = getGreetingTime(moment())

    return (
        <header className={Styles.headerWrapper}>
            <Container fluid className={Styles.container}>
                <div className={Styles.menuWrapper}>
                    <div className={Styles.menuNav}>
                        <div className={cn(Styles.menuItem, Styles.active)}>
                            Мои привычки
                        </div>
                        <div className={Styles.menuItem}>Статистика</div>
                        <div className={Styles.menuItem}>Интересные статьи</div>
                    </div>
                    <div className={Styles.greeting}>
                        Привет, <b>{name}!</b> <br /> {greeting}
                    </div>
                    <div className={Styles.authBlock}>
                        <div onClick={logOut} className={Styles.menuItem}>
                            Выход
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}
