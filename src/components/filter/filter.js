import arrow from '../../resources/img/ico/arrow-yellow.svg';
import line from '../../resources/img/ico/line-filter.svg';
import './filter.scss'



const Filter = () => {
    return(
        <ul className='filter'>
            <li>
                <div className='head-filter'>
                    <h3>Стоимость</h3>
                    <img src={arrow} alt='arrow'/>
                </div>
            </li>
            <li>
                <div className='head-filter'>
                    <h3>Толщина</h3>
                    <img src={arrow} alt='arrow'/>
                </div>
            </li>
            <li>
                <div className='head-filter'>
                    <h3>Длинна</h3>
                    <img src={arrow} alt='arrow'/>
                </div>
                <div className='line-slide'>
                    <img src={line} className='line' />
                </div>
            </li>
            <li>
                <div className='head-filter'>
                    <h3>Ширина</h3>
                    <img src={arrow} alt='arrow'/>
                </div>
            </li>
        </ul>
    )
}

export default Filter;