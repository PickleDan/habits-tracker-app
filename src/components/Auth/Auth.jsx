import React, { useState } from 'react'
import Styles from './Auth.module.scss'
import Modal from 'react-modal'
import { Container } from 'react-bootstrap'
export const Auth = ({}) => {
    // const onLoginChangeHandle = (e) => setLogin(e.target.value)
    // const onPasswordChangeHandle = (e) => setPassword(e.target.value)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleRegistrationBtn = (e) => {
        e.preventDefault()
        setModalIsOpen(true)
    }

    const customModalStyles = {
        content: {
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
    return (
        <div className={Styles.loginContainer}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customModalStyles}
            >
                <h2 className="modal-title">Регистрация</h2>
                <form>
                    <div className="modal-inputs">
                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите email:</span>
                            <input
                            // onChange={(e) => onChangeHabitNameModal(e)}
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">Введите пароль:</span>
                            <input
                            // onChange={(e) => onChangeHabitMeasureModal(e)}
                            />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button>Отменить</button>
                        <button>Ок</button>
                    </div>
                </form>
            </Modal>

            <div className={Styles.wrapper}>
                <div className={Styles.logoWrapper}>
                    {/*<img alt="logo" src={logo} />*/}
                </div>
                <div className={Styles.frame}>
                    <h1>
                        Добро пожаловать <br />в мир привычек!
                    </h1>

                    <p className={Styles.AuthWarning}>
                        Пожалуйста, авторизуйтесь
                    </p>

                    <form className={Styles.auth}>
                        <div className={Styles.authItem}>
                            <p className={Styles.authItemLogin}>Ваш логин</p>
                            <input
                                type={'text'}
                                // onChange={onLoginChangeHandle}

                                placeholder={'Введите логин'}
                            />
                        </div>
                        <div className={Styles.authItem}>
                            <p className={Styles.authItemPassword}>
                                Ваш пароль
                            </p>
                            <input
                                type="password"
                                // onChange={onPasswordChangeHandle}
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
