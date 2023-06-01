 
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import arrow from '../../resources/img/ico/arrow-yellow.svg';
import './filter.scss'
import { useState, useEffect } from 'react';
 
const Filter = ({originalProduct, product, setProduct}) => {
    const [priceCond, setPriceCond] = useState(true);
    // const [thicknessCond, setThicknessCond] = useState(false);
    // const [lengthCond, setLengthCond] = useState(false);
    // const [widthCond, setWidthCond] = useState(false);

        return(
        <ul className='filter'>
            <li>
                <div className='head-filter'>
                    <div className='click-filter' onClick={() =>setPriceCond(!priceCond)}>
                        <h3 >Стоимость</h3>
                        <img className={`filter-arrow ${priceCond ? 'rotate' : null }`} src={arrow} alt='arrow'  />
                    </div>
                   
                </div>
                <FilterPrice originalProduct={originalProduct} product={product} setProduct={setProduct} cond={priceCond}/>
            </li>
            {/* <li>
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
            </li>
            <li>
                <div className='head-filter'>
                    <h3>Ширина</h3>
                    <img src={arrow} alt='arrow'/>
                </div>
            </li> */}
        </ul>
    )
}

export default Filter;
 

const FilterPrice = ({originalProduct, setProduct, cond }) => {
    const min = 0;
    const max = 99999;
    const [from, setFrom] = useState(0);
    const [before, setBefore] = useState(99999);
  
    const onSliderChange = (e) => {
      setFrom(Math.min(e[0], e[1]));
      setBefore(Math.max(e[0], e[1]));
    };
  
    useEffect(() => {
      const filteredProducts = originalProduct.filter((item) => {
        return item.price_rubles >= from && item.price_rubles <= before;
      });
      setProduct(filteredProducts);
    }, [from, before, originalProduct, setProduct]);
  
    

    return(
        <div className={`filter-range ${cond ? 'active' : null }`}> 
            <div className='inputs-filter'>
                <label htmlFor="from-input">
                    от
                </label>
                <input type="number" value={from} onChange={e => setFrom(parseInt(e.target.value))} min={min} name='from-input' className='input-filter'/>
                <label htmlFor="before-input">
                    до 
                </label>
                <input type="number" value={before} onChange={e => setBefore(parseInt(e.target.value))} min={min} name='before-input' className='input-filter'/>
                <label htmlFor="before-input">
                    руб.
                </label>

            </div>
            <div className="range">
                <Slider
                    range 
                    value={[from, before]}
                    min={min}
                    max={max}
                    onChange={ onSliderChange}
                    trackStyle={[{backgroundColor: '#FFB701'}]}
                    handleStyle={[{backgroundColor: '#FFB701', borderColor: '#FFB701'}, {backgroundColor: '#FFB701', borderColor: '#FFB701'}]}
                    />

            </div>
        
        </div>
    )
} 