import React, { useState } from 'react'
import Styles from './Auth.module.scss'
import Modal from 'react-modal'
import { Redirect } from 'react-router-dom'

export const Auth = ({ setLogin, setPassword, fetchAuth, isLoggedIn }) => {
    const onLoginChangeHandle = (e) => {
        setLogin(e.target.value)
    }

    const onPasswordChangeHandle = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const onSubmitAuth = (e) => {
        e.preventDefault()
        console.log('REQUEST')
        fetchAuth()
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleRegistrationBtn = (e) => {
        e.preventDefault()
        setModalIsOpen(true)
    }

    const customModalStyles = {
        content: {
            width: '640px',
            backgroundColor: '#508be7',
            color: '#fff',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
        },
    }
    console.log('IS LOGGED IN', isLoggedIn)

    return (
        <div className={Styles.loginContainer}>
            {isLoggedIn ? <Redirect to="/" /> : null}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customModalStyles}
            >
                <h2 className="modal-title signup-title">Регистрация</h2>
                <form>
                    <div className="modal-inputs">
                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите email:</span>
                            <input />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите логин:</span>
                            <input />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">
                                Введите ваше имя:
                            </span>
                            <input />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите пароль:</span>
                            <input />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">
                                Введите пароль еще раз:
                            </span>
                            <input />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button className="signup-button">Отменить</button>
                        <button className="signup-button">Ок</button>
                    </div>
                </form>
            </Modal>

            <div className={Styles.wrapper}>
                <div className={Styles.frame}>
                    <h1>
                        Добро пожаловать <br />в мир привычек!
                    </h1>

                    <p className={Styles.AuthWarning}>
                        Пожалуйста, авторизуйтесь
                    </p>

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
