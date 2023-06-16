import React, { useEffect } from 'react';

const WidgetOrder = ({params}) => { 
  useEffect(() => {
    if (window.ISDEKWidjet ) {
       
      const orderWidget = new window.ISDEKWidjet({
        popup: true,
        defaultCity: 'Казань',
        cityFrom: 'Казань',
        goods: [
          { length: 1000, width: 200, height: 20, weight: 51 }  // информация о товаре в корзине
        ],
        onReady: function () {
          document.getElementById('linkForWidget').style.display = 'inline';
        },
        onChoose: function (info) {
          document.querySelector('[name="chosenPost"]').value = info.id;
          document.querySelector('[name="addressPost"]').value = info.PVZ.Address;

          // Расчет стоимости доставки
          const price = info.price < 500 ? 500 : Math.ceil(info.price / 100) * 100;
          document.querySelector('[name="pricePost"]').value = price;
          document.querySelector('[name="timePost"]').value = info.term;

          orderWidget.close();
        }
      });

      // Добавляем объект orderWidget в глобальную область видимости
      window.orderWidget = orderWidget;
    }
  }, []);

  return (
    <div>
      <p>
        <a href="javascript:void(0)" onClick={() => window.orderWidget?.open()}>
          Выбрать ПВЗ
        </a>
      </p>
      <div id="linkForWidget" style={{ display: 'none' }}>
        <p>
          Pick-up point chosen: <input type="text" name="chosenPost" defaultValue="" />
        </p>
        <p>
          Pick-up point's address: <input type="text" name="addressPost" defaultValue="" />
        </p>
        <p>
          Delivery price: <input type="text" name="pricePost" defaultValue="" />
        </p>
        <p>
          Approximate delivery time: <input type="text" name="timePost" defaultValue="" />
        </p>
      </div>
    </div>
  );
};

export default WidgetOrder;
