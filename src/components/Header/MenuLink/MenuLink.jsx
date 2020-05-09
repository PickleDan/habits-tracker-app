import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import cn from 'classnames'
import Styles from '../Header.module.scss'

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    })

    return (
        <div
            className={
                match ? cn(Styles.menuItem, Styles.active) : Styles.menuItem
            }
        >
            <Link className={Styles.menuItemLink} to={to}>
                {label}
            </Link>
        </div>
    )
}

export default MenuLink
