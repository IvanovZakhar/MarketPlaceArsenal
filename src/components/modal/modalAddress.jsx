import React, { useState } from "react";
import Modal from "react-modal";
import { useForm, Controller} from "react-hook-form";
import padlock from '../../resources/img/ico/padlock.svg';
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
    width: 900,
    height: 450,
    borderRadius: 10
  },
};

function ModalAddress({product}) {

 
 
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
    
 
  const address = JSON.parse(localStorage.address)
 
  return (
    <div className="modal-order">
      <div className="default_address">
        <span>{`${address.city},  ул.${address.street} д.${address.houseNumber}, кв.${address.apartmentNumber}, 
            тел: +${address.number} Получатель: ${address.lname} ${address.fname}`}</span>
        <button className="button__modal-order" onClick={(e) => {
          setModalOpen(true)
    
          }}>Редактировать</button>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        ariaHideApp={false}
     
      >
        <form className="address-form" onSubmit={handleSubmit(({fname, lname, number, city, street, houseNumber, apartmentNumber}) => {
            const data = {
              fname: fname,
              lname: lname,
              number: +number,
              city: city,
              street: street, 
              houseNumber: +houseNumber,
              apartmentNumber: +apartmentNumber
               
            };
            
            if(Object.entries(errors).length === 0){
              localStorage.address = JSON.stringify(data)
              setModalOpen(false)
            }
        })}>
          <h2>Ваши данные</h2>
       
          <div className="inputs">
            <div className="name-inputs">
                <label htmlFor="number">
                      Имя
                </label>
                <input id="name" type="text" placeholder="Иван" className="first-name" defaultValue={address.fname} {...register("fname", {required: true, maxLength: 20})} />
                <label htmlFor="number">
                      Фамилия
                </label>
                <input id="name" type="text" placeholder="Иванов" className="first-name" defaultValue={address.lname}{...register("lname", {required: true, maxLength: 80})} />
                <label htmlFor="number">
                  Телефон 
                </label>
                <input id="number" type="tel" placeholder="+7 (999) 999 99 99" className="number" defaultValue={address.number}{...register("number", {required: true, maxLength: 12,  minLength: 10})} />
              </div>
              <div className="address-inputs">
                <label htmlFor="number">
                      Город
                </label>
                <input id="name" type="text" placeholder="Москва" className="number" defaultValue={address.city}{...register("city", {required: true, maxLength: 20})} />
                <label htmlFor="number">
                      Улица
                </label>
                <input id="name" type="text" placeholder="Первомайская" className="number" defaultValue={address.street}{...register("street", {required: true, maxLength: 80})} />
                <div className="numbers-for-address">
                  <div>
                    <label htmlFor="number">
                      Дом
                    </label>
                    <input id="number" type="number" placeholder="1"  className="number" defaultValue={address.houseNumber}{...register("houseNumber", {required: true, maxLength: 12,  minLength: 1})} />
                  </div>
                  <div>
                    <label htmlFor="number">
                      Квартира
                    </label>
                    <input id="number" type="number" placeholder="2"  className="number" defaultValue={address.apartmentNumber}{...register("apartmentNumber", { maxLength: 3})} />
                  </div>
                </div>
            </div>
          </div>
          <div className="checkbox-agree">
              
              
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <label className="checkbox-label">
                <input type="checkbox" name="agree" className="input__agree" {...field}/>
                <img src={padlock} alt="agree-input" className={errors.checkbox ? "checkbox-image errors" : "checkbox-image"} />
              </label>}
                
              />
              <label className="agree">Я даю согласие на обработку моих персональных данных</label>
              {/* {errors.checkbox ? <span className="errors">Дайте соглайсие на обработку персональных данных</span> : null} */}
          </div>
        
          <button type="submit" className="btn_sub">
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

export default ModalAddress;