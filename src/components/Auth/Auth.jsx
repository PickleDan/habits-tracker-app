import React, { useState } from 'react'
import Styles from './Auth.module.scss'
import Modal from 'react-modal'
import cn from 'classnames'
import { Redirect } from 'react-router-dom'
import {
    setLoginError,
    setMailError,
    setPasswordError,
} from '../../redux/signUp/signUpActions'

export const Auth = ({
    setLogin,
    setPassword,
    setIsError,
    mailError,
    loginError,
    passwordError,
    success,
    fetchAuth,
    fetchSignUp,
    isLoggedIn,
    isError,
    setMail,
    setLoginSignUp,
    setName,
    setPasswordFirstTime,
    setPasswordSecondTime,
    setMailError,
    setLoginError,
    setPasswordError,
}) => {
    const onLoginChangeHandle = (e) => {
        setLogin(e.target.value)
        setIsError(false)
    }

    const onPasswordChangeHandle = (e) => {
        setPassword(e.target.value)
        setIsError(false)
    }

    const onSubmitAuth = (e) => {
        e.preventDefault()
        fetchAuth()
    }

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        fetchSignUp()
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleRegistrationBtn = (e) => {
        e.preventDefault()
        setModalIsOpen(true)
    }

    const customModalStyles = {
        content: {
            width: '500px',
            backgroundColor: '#508be7',
            color: '#fff',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            padding: '20px 40px',
        },
    }
    console.log('111', success)

    return (
        <div className={Styles.loginContainer}>
            {isLoggedIn ? <Redirect to="/" /> : null}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customModalStyles}
            >
                <h2 className="modal-title sign-up-title">Регистрация</h2>

                {success ? (
                    <h6 className="sign-up-success">
                        Вы успешно зарегистрированы!
                    </h6>
                ) : null}

                {mailError ? (
                    <h6 className="sign-up-error">
                        Ошибка: данный email уже используется.
                    </h6>
                ) : null}

                {loginError ? (
                    <h6 className="sign-up-error">
                        Ошибка: данный логин уже занят.
                    </h6>
                ) : null}

                {passwordError ? (
                    <h6 className="sign-up-error">
                        Ошибка: введенные пароли не совпадают.
                    </h6>
                ) : null}

                <form onSubmit={onSubmitSignUp}>
                    <div className="modal-inputs">
                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите email:</span>
                            <input
                                type="email"
                                minLength="3"
                                onChange={(e) => {
                                    setMailError(false)
                                    setMail(e.target.value)
                                }}
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите логин:</span>
                            <input
                                minLength="3"
                                onChange={(e) => {
                                    setLoginError(false)
                                    setLoginSignUp(e.target.value)
                                }}
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">
                                Введите ваше имя:
                            </span>
                            <input
                                minLength="3"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите пароль:</span>
                            <input
                                onChange={(e) => {
                                    setPasswordError(false)
                                    setPasswordFirstTime(e.target.value)
                                }}
                                minLength="6"
                                type="password"
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">
                                Введите пароль еще раз:
                            </span>
                            <input
                                onChange={(e) =>
                                    setPasswordSecondTime(e.target.value)
                                }
                                minLength="6"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setModalIsOpen(false)
                            }}
                            className="sign-up-button"
                        >
                            Отменить
                        </button>
                        <button className="sign-up-button">Ок</button>
                    </div>
                </form>
            </Modal>

            <div className={Styles.wrapper}>
                <div className={Styles.frame}>
                    <h1>
                        Добро пожаловать <br />в мир привычек!
                    </h1>
                    {!isError ? (
                        <p className={Styles.AuthWarning}>
                            Пожалуйста, авторизуйтесь
                        </p>
                    ) : (
                        <p className={cn(Styles.AuthWarning, Styles.AuthError)}>
                            Вы ввели неверный логин или пароль
                        </p>
                    )}

                    <form className={Styles.auth} onSubmit={onSubmitAuth}>
                        <div className={Styles.authItem}>
                            <p className={Styles.authItemLogin}>Ваш логин</p>
                            <input
                                type={'text'}
                                onChange={onLoginChangeHandle}
                                placeholder={'Введите логин'}
                            />
                        </div>
                        <div className={Styles.authItem}>
                            <p className={Styles.authItemPassword}>
                                Ваш пароль
                            </p>
                            <input
                                type="password"
                                onChange={onPasswordChangeHandle}
                                placeholder={'Введите пароль'}
                            />
                        </div>
                        <button>Войти</button>
                        <button onClick={(e) => handleRegistrationBtn(e)}>
                            Регистрация
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
