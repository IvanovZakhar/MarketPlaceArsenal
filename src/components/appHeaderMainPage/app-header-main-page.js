import React from 'react';
import './app-header-main-page.scss'
import logo from '../../resources/img/ico/logo.svg';
import email from '../../resources/img/ico/E-mail.svg'


const AppHeaderMainPage = () => {
    return (
        <div className="app-header__main-page">
            <div className='container'>
                <img src={logo} className="logo" alt="logo"/>
                <div className='address'>
                    <div className='col-left__address'> 
                       <img src={email} className="email_ico" alt="email"/>
                    </div>
                    <div className='col-right__address'> 
                        <a href="mailto:6220095@mail.ru">6220095@mail.ru</a>
                        <p>Мы на связи!</p>
                    </div>
                </div>
                <button className="call-me__btn">Перезвоните мне</button>
            </div>
        </div>
    )
}

export default AppHeaderMainPage;