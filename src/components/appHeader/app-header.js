import useCounter from '../../hooks/useCounter';
import { Link } from 'react-router-dom';
import check from '../../resources/img/ico/check.svg';
import phone from '../../resources/img/ico/phone.svg';
import cart from '../../resources/img/ico/cart.svg';
import like from '../../resources/img/ico/like.svg';
import avatar from '../../resources/img/ico/avatar.svg';
import './app-header.scss';

const AppHeader = () => {
   
    return(
        <div className='app-header'>
            <div className='container'>
                <header>

                
                    <Link to='/catalog' className='catalog__btn'>
                        <p className='text__catalog' >КАТАЛОГ</p>
                    </Link>
                   
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
                    <Link to='/cart' className='cart'>
                        <img src={cart} alt='cart'/>
                        {/* <div className='count__cart'><p>{cartItems.length}</p></div> */}
                    </Link>
                    <a href='/'>
                        <img src={avatar} className='avatar' alt='avatar'/>
                    </a>
                </header>
            </div>
        </div>
    )
}

export default AppHeader;