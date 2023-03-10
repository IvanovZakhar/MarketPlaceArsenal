
import './app-header.scss';
import check from '../../resources/img/ico/check.svg';
import phone from '../../resources/img/ico/phone.svg';
import cart from '../../resources/img/ico/cart.svg';
import like from '../../resources/img/ico/like.svg';
import avatar from '../../resources/img/ico/avatar.svg';

const AppHeader = () => {
    return(
        <header className='app-header'>
            <div className='container'>
                <button className='catalog__btn'>
                    <p className='text__catalog'>КАТАЛОГ</p>
                    <img src={check} className='check__catalog' alt="check"/>
                </button>
                <input type='text'  placeholder='Поиск по сайту'/>
                <div className='phone'>
                    <div className='col-left__phone'> 
                       <img src={phone} className='phone_ico' alt='number'/>
                    </div>
                    <div className='col-right__phone'> 
                        <a href='tel:+79219337214'>+7-921-933-72-14</a>
                        <p>Пн-Пт с 9:00 до 18:00</p>
                    </div>
                </div>
                <img src={like} className='like' alt='like'/>
                <a href='/' className='cart'>
                    <img src={cart} alt='cart'/>
                    <div className='count__cart'><p>3</p></div>
                </a>
                <a href='/'>
                    <img src={avatar} className='avatar' alt='avatar'/>
                </a>
            </div>
        </header>
    )
}

export default AppHeader;