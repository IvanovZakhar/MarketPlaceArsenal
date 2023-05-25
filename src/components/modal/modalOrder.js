import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import close from './../../resources/img/ico/close.svg';
import useMarketService from "../../services/market-services";
import './modalOrder.scss'


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 900,
    height: 450,
    borderRadius: 10
  },
};

function ModalOrder({product}) {

  const {newOrder} = useMarketService();
 
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  return (
    <div className="modal-order">
      <button className="button__modal-order" onClick={(e) => {
        setModalOpen(true)
   
        }}>   </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        ariaHideApp={false}
     
      >
        <form onSubmit={handleSubmit(({fname, lname, number, city, street, houseNumber}) => {
            const data = {
              fname: fname,
              lname: lname,
              number: +number,
              city: city,
              street: street, 
              houseNumber: +houseNumber 
            };

            // const data = {
            //   name: 'John Doe',
            //   number: 123,
            //   product: ['product1', 'product2', 'product3'],
            // };
       
            // newOrder(data).then(res => console.log(res))
            fetch('http://localhost:3004/new-order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
              .then(response => response.json())
              .then(savedDoc => {
                // Обработка успешного ответа от сервера
                console.log(savedDoc);
              })
              .catch(error => {
                // Обработка ошибок
                console.error(error);
              });
        })}>
          <h2>Ваши данные</h2>
       
          <div className="inputs">
            <div className="name-inputs">
                <label htmlFor="number">
                      Имя
                </label>
                <input id="name" type="text" placeholder="Иван" className="first-name" {...register("fname", {required: true, maxLength: 20})} />
                <label htmlFor="number">
                      Фамилия
                </label>
                <input id="name" type="text" placeholder="Иванов" className="first-name" {...register("lname", {required: true, maxLength: 80})} />
                <label htmlFor="number">
                  Телефон 
                </label>
                <input id="number" type="tel" placeholder="+7 (999) 999 99 99" className="number" {...register("number", {required: true, maxLength: 12,  minLength: 10})} />
              </div>
              <div className="address-inputs">
                <label htmlFor="number">
                      Город
                </label>
                <input id="name" type="text" placeholder="Москва" className="number" {...register("city", {required: true, maxLength: 20})} />
                <label htmlFor="number">
                      Улица
                </label>
                <input id="name" type="text" placeholder="Первомайская" className="number" {...register("street", {required: true, maxLength: 80})} />
                <label htmlFor="number">
                  Дом
                </label>
                <input id="number" type="number" placeholder="1"  className="number" {...register("houseNumber", {required: true, maxLength: 12,  minLength: 1})} />
                <label htmlFor="number">
                  Квартира
                </label>
                <input id="number" type="number" placeholder="2"  className="number" {...register("apartmentNumber", {required: true, maxLength: 3})} />
              </div>
          </div>
            <button сlassName="submit-btn" type="submit" >
               Сохранить
            </button>
        
 
        </form>
        <button className="close-modal" onClick={() => setModalOpen(false)}>
          <img src={close} alt="close-modal"/>
        </button>
  
      </Modal>
    </div>
  );
}

export default ModalOrder;