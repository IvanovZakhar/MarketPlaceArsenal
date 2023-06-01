import { Link } from 'react-router-dom';
import logo from '../../resources/img/ico/logo-footer.svg';
import point from '../../resources/img/ico/point.svg';
import phone from '../../resources/img/ico/phone.svg';
import email from '../../resources/img/ico/E-mail.svg';
import time from '../../resources/img/ico/time.svg';
import line from '../../resources/img/ico/line.svg';
import './footer.scss'

const Footer = () => {
    return(
        <footer>
            <div className='container'>
                <div className='row__footer'>
                    <ul>
                        <li className='logo__footer'>
                            <img src={logo} className='logo' alt='logo'/>
                            <h4 className='text__logo'>С нами надежнее</h4>
                        </li>
                        <li className='logo__footer'>
                            <h5>ООО «ЦМА»</h5>
                        </li>
                        <li className='logo__footer'>
                            <h5> 
                                ИНН: 7802839097<br/>
                                ОГРН: 1137847379823
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <h4>ПРОДУКЦИЯ</h4>
                        <li className='others__footer'>
                            <Link to='/catalog/grids'>Решетки</Link>
                        </li>
                        <li className='others__footer'>
                            <Link to='/catalog/conditioner-protection'> Защита кондиционера</Link>
                           
                        </li>
                        <li className='others__footer'>
                            <Link to='/catalog/anti-theft'>Противоугонные устройства</Link>
                        </li>
                        <li className='others__footer'>
                            <Link to='/catalog/woodcutters'>Дровницы</Link>
                        </li>
                        <li className='others__footer'>
                            <Link to='/catalog/birdhouses'>Кормушки для птиц</Link>
                        </li>
                        <li className='others__footer'>
                            <Link to='/catalog/pergolias'>Перголы</Link>
                        </li>
                        <li className='others__footer'>
                            <Link to='/catalog/swings'>Качели</Link>
                        </li>
                        <li className='others__footer'>
                            <Link to='/catalog/flags'>Флагштоки</Link>
                        </li>
                    </ul>
                    <ul>
                        <h4>ПОКУПАТЕЛИ</h4>
                        <li className='others__footer'>
                            Доставка и самовывоз
                        </li>
                        <li className='others__footer'>
                            Оплата
                        </li>
                        <li className='others__footer'>
                            Условия возврата
                        </li>
                        <li className='others__footer'>
                            Как принимать товар
                        </li>
                        <li className='others__footer'>
                            Программа лояльности
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={point} alt='point'/>
                            <div className='address'>
                                <span className='up__address'>Б. Сампсониевский пр., 80</span>
                                <span className='down__address'>Санкт-Петербург</span>
                            </div>
                        </li>
                        <li>
                            <img src={phone} alt='point'/>
                            <div className='address'>
                                <a href='tel:+79219337214' className='up__address'>+7-921-933-72-14</a>
                                <span className='down__address'>Получить консультацию</span>
                            </div>
                        </li>
                        <li>
                            <img src={email} alt='point'/>
                            <div className='address'>
                                <a href='mailto:6220095@mail.ru' className='up__address'>6220095@mail.ru</a>
                                <span className='down__address'>Мы на связи!</span>
                            </div>
                        </li>
                        <li>
                            <img src={time} alt='point'/>
                            <div className='address'>
                                <div className='up__address'>с 9:00 по 18:00</div>
                                <span className='down__address'>Сб-Вс - выходной</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <img src={line} alt='line' className='line__footer'/>
                <div className='offer'>
                    <h6>2023 Арсенал-1.РФ © Все права защищены</h6>
                    <h6>Договор оферты и Политика обработки персональных данных</h6>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer; 