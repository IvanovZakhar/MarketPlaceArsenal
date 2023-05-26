import React, { useState } from "react";
import Modal from "react-modal";
import useMarketService from "../../services/market-services";
 
import close from './../../resources/img/ico/close.svg';
import './modal.scss'


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 500,
    height: 90,
    borderRadius: 10
  },
};

function ModalOrder({product}) {
  const [resOrders, setResOrders] = useState('')   
  const {newOrder, error} = useMarketService();
 
  const [modalOpen, setModalOpen] = useState(false);
  const address = localStorage.address ? JSON.parse(localStorage.address) : []
 
    const res = {
        successfull: {
            h4: "Ваш заказ создан",
            span: "Скоро наш менеджер свяжется с вами"
        },
        error: {
            h4: "Что-то пошло не так..",
            span: "Свяжитесь с нами по номеру +7921-933-72-14"
        }
      }
      
 

  const onSubmit = () =>{
    address.product = product.map(item => {
        return {
                article: item.article,
                name_of_product: item.name_of_product,
                price_rubles: item.price_rubles,
                quantity: item.quantity
            }
    })
   
 
    newOrder(address).then(data => setResOrders(res.successfull))
    .catch(e =>  setResOrders(res.error))
  }
 
  return (
    <div className="modal-order">
        <button className="get-order" onClick={() => {
          setModalOpen(true)
          onSubmit()  
          }}>Оформить заказ</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        ariaHideApp={false}
     
      >
        <div className="info-order">
            <h4>{resOrders.h4}</h4>
            <span>{resOrders.span}</span>
        </div>
        <button className="close-modal" onClick={() => setModalOpen(false)}>
          <img src={close} alt="close-modal"/>
        </button>
  
      </Modal>
    </div>
  );
}




export default ModalOrder;