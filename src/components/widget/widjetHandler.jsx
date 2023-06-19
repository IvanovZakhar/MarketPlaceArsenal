import React, { useEffect, useState } from 'react'; 
import './widjetHandler.scss';

const WidgetHandler = ({ params, address, handleAddToAddress }) => {
  const [chosenPost, setChosenPost] = useState('');
  const [addressPost, setAddressPost] = useState('');
  const [pricePost, setPricePost] = useState('');
  const [timePost, setTimePost] = useState(''); 

  useEffect(()=> {
    handleAddToAddress({...address,chosenPost, addressPost, pricePost, timePost})
  }, [addressPost])

  console.log(address)
  useEffect(() => {
    if (window.ISDEKWidjet) { 
      const products = params.map(item => {
        if(item.quantity === 1){
          return {
            length: item.length_in_packaging_mm / 1000,
            width: item.width_in_packaging_mm / 1000,
            height: item.height_in_packaging_mm / 1000,
            weight: item.weight_in_packaging_g / 1000
          } 
        }
        if(item.quantity > 1){
          return {
            length: item.length_in_packaging_mm / 1000,
            width: item.width_in_packaging_mm / 1000,
            height: item.height_in_packaging_mm / 1000,
            weight: (item.weight_in_packaging_g / 1000) * item.quantity
          } 
        }
      }) 
  
      const orderWidget = new window.ISDEKWidjet({ 
        link: "forpvz",
        defaultCity: 'Москва',
        cityFrom: 'Санкт-Петербург',
        goods: products, 
        apikey: 'dc1ad195-bfc7-45eb-b833-c719b7440854',
        onChoose: function (info) {
          // document.getElementsByName('chosenPost')[0].value = info.id;
          setChosenPost(info.id)
          // document.getElementsByName('addresPost')[0].value = info.PVZ.Address;
          setAddressPost(info.PVZ.Address)
          const price = info.price < 500 ? 500 : Math.ceil(info.price / 100) * 100;
          setPricePost(price)
          // document.getElementsByName('pricePost')[0].value = price;
          // document.getElementsByName('timePost')[0].value = info.term;
          setTimePost(info.term) 
        }
      });

      window.orderWidget = orderWidget;
    }
  }, [params]);

  
 
  return (<div className='widget-hundler'>
              <h4>Выберите пункт выдачи</h4>
              <div id="forpvz" style={{height: "500px"}}></div>
              {address.addressPost !== "" ? 
              <>
                <h4>Ваш пункт выдачи</h4>
        
                <span className='address_widjet'>{address.chosenPost}</span> 
                <span className='address_widjet'>{address.addressPost}</span>
            
              </>
              : null}
          </div>
  );
};

export default WidgetHandler;
