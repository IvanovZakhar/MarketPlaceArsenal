import React, { useEffect } from 'react';

const WidgetHandler = () => {
  useEffect(() => {
    if (window.ISDEKWidjet) {
      new window.ISDEKWidjet({
        defaultCity: 'Новосибирск', // какой город отображается по умолчанию
        cityFrom: 'Омск', // из какого города будет идти доставка
        country: 'Россия', // можно выбрать страну, для которой отображать список ПВЗ
        link: 'forpvz', // id элемента страницы, в который будет вписан виджет
        path: 'https://widget.cdek.ru/widget/scripts/', // директория с библиотеками
        servicepath: 'http://yoursite.net/service.php' // ссылка на файл service.php на вашем сайте
      });
    }
  }, []);

  return <div id="forpvz" style={{ width: '100%', height: '600px' }}></div>;
};

export default WidgetHandler;
