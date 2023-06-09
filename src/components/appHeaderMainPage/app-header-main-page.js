import React from 'react';
import './app-header-main-page.scss'
import logo from '../../resources/img/ico/logo.svg';
import email from '../../resources/img/ico/E-mail.svg'


const AppHeaderMainPage = () => {
    function scrollToBottom() {
        // Получаем высоту страницы
        const scrollHeight = document.documentElement.scrollHeight;
        
        // Выполняем плавный скролл до нижней границы страницы
        window.scrollTo({
          top: scrollHeight,
          behavior: 'smooth'
        });
      }
    return (
        <div className="app-header__main-page">
            <div className='container'>
                <header>
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
                    <button onClick={scrollToBottom} className="call-me__btn">Перезвоните мне</button>
                </header>
            </div>
        </div>
    )
}

export default AppHeaderMainPage;