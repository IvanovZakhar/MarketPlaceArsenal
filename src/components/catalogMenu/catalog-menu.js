
import {Link} from "react-router-dom";
import './catalog-menu.scss'
import arrow from '../../resources/img/ico/arrow-yellow.svg';

const CatalogMenu = () => {
    return(
        <ul className='catalog-menu'>
           <li>
                <Link to='/catalog/grids'>
                     Решетки
                    <img src={arrow} className='check__catalog-menu' alt="check"/>
                    <ul className='section__catalog-menu grids'>
                        <li className='subsection__catalog-menu'>
                            <Link className='subsection-link__catalog-menu' to='/catalog/grids-one'>Одностворчатые</Link>
                        </li>
                        <li className='subsection__catalog-menu'>
                            <Link className='subsection-link__catalog-menu' to='/catalog/grids-two'>Двухстворчатые</Link>
                        </li>
                    </ul>
                </Link>

            </li>
            <li>
                <a  href='/'>
                    Защита кондиционера
                    <img src={arrow} className='check__catalog-menu' alt="check"/>
                    <ul className='section__catalog-menu conditioning'>  
                         <li className='subsection__catalog-menu'>
                            <a className='subsection-link__catalog-menu' href='/'>Козырьки</a>
                        </li>
                        <li className='subsection__catalog-menu'>
                            <a className='subsection-link__catalog-menu' href='/'>Корзины</a>
                        </li>
                    </ul>
                </a>
            </li>

            <li>
                <Link to='catalog/anti-theft'>Противоугонные устройства</Link>
            </li>
            <li>
                 <a href='/'>Дровницы</a>
            </li>
            <li>
                <a href='/'>Кормушки для птиц</a>
            </li>
            
         
        </ul>
    )
}

export default CatalogMenu;