import React from 'react'
import Styles from './Header.module.scss'
import { Container } from 'react-bootstrap'
import cn from 'classnames'

export const Header = ({ setAuthToken }) => {
    const logOut = () => {
        setAuthToken('')
    }

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
