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
    width: 750,
    height: 279,
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
   
        }}>Заказать</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        ariaHideApp={false}
        
      >
        <form onSubmit={handleSubmit(({name, number}) => {
            const data = {
              name: name,
              number: +number,
              product: [ product.article, product.name_of_product, product.price_rubles],
            };
       
            newOrder(data).then(res => console.log(res))
        })}>
          <h2>Оформление заказа</h2>
          <span>Персональный менеджер свяжется с вами и подготовит для вас предложение.</span>
            <div>
              <label htmlFor="number">
                    Имя
              </label>
              <input id="name" type="text" placeholder="Иван Иванов" className="first-name" {...register("name", {required: true, maxLength: 80})} />
          
              <label htmlFor="number">
                Телефон 
              </label>
              <input id="number" type="tel" placeholder="+7 (999) 999 99 99" className="number" {...register("number", {required: true, maxLength: 12,  minLength: 10})} />
            </div>
        
            <button сlassName="submit-btn" type="submit" >
               Перезвоните мне
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