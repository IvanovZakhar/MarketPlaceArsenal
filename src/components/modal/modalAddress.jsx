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
    width:  600,
    minHeight: 450,
    borderRadius: 10
  },
};

function ModalAddress({address, handleAddToAddress}) {

 
 
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
    

 
 
 
  return (
    <div className="modal-order">
      <div className="default_address">
        {Object.keys(address).length === 0 ?  null : <span>{`тел: +${address.number} Получатель: ${address.lname} ${address.fname} ${address.lfname}`} </span> }
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
        <form className="address-form" onSubmit={handleSubmit(({fname, lname, lfname, number, }) => {
            const data = {
              fname: fname,
              lname: lname,
              lfname: lfname,
              number: +number
               
            };
            
            if(Object.entries(errors).length === 0){
              handleAddToAddress(data)
              setModalOpen(false)
            }
        })}>
          <h2>Данные получателя</h2>
       
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
                      Отчество
                </label>
                <input id="name" type="text" placeholder="Иванович" className="first-name" defaultValue={address.lfname}{...register("lfname", {required: true, maxLength: 80})} />
                <label htmlFor="number">
                  Телефон 
                </label>
                <input id="number" type="tel" placeholder="+7 999 999 99 99" className="number" defaultValue={address.number}{...register("number", {required: true,   minLength: 11,maxLength: 12})} />
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