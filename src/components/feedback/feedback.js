import padlock from '../../resources/img/ico/padlock.svg';
import { useForm, Controller} from "react-hook-form";
import useMarketService from '../../services/market-services';
import Spinner from 'react-bootstrap/Spinner';
import './feedback.scss'
import { useState } from 'react';

const Feedback = () => {
    const {newFeedback, loading} = useMarketService()
    const [message, setMessage] = useState(false)
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
          checkbox: false,
        }
      }); 
      
    const Form = () => {
        return (
            <form className='feedback' onSubmit={handleSubmit(({name, number}) => {
                const data = {
                  name: name,
                  number: +number 
                   
                }; 
                if(Object.entries(errors).length === 0){
                    newFeedback(data).then(() => setMessage(true)) 
                }
            })}>
                <h3>Требуется консультация?</h3>
                <div className='input__feedback'>
                    <div className='number__feedback'>
                        <label htmlFor="number">Телефон</label>
                        <input type='phone' className='item_feedback' name='phone' placeholder='+7 (999) 999 99 99' {...register("number", {required: true,  minLength: 11, maxLength: 12 })}/>
                    </div>
                    <div className='name__feedback'>
                        <label htmlFor="name">Имя</label>
                        <input type='text' className='item_feedback' name='name' placeholder='Иван Иванов' {...register("name", {required: true, maxLength: 20})}/>
                    </div>
                    <div className="checkbox-agree">
                        <Controller
                            name="checkbox"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <label className="checkbox-label">
                            <input type="checkbox" name="agree" className="input__agree" {...field}/>
                            <img src={padlock} alt="agree-input" className={errors.checkbox ? "checkbox-image errors" : "checkbox-image"} />
                        </label> }
                            
                        />
                        <label className="agree">Я даю согласие на обработку моих персональных данных</label>
          
                        </div>
                    <button type='submit' className="call-me__btn">Перезвоните мне</button>
                </div>
            </form>
        )
    }  

    const Successfull = () => {
        return(
            <div className='feedback'>
                <h2>
                    Мы получили ваш номер! <br/> <br/>Скоро с вами свяжется наш менеджер.
                </h2>
            </div>
        )
    }
    const elem =   loading ?    
    <Spinner animation="border" role="status">
     
    </Spinner> : <Form/>
    return(
      message ? <Successfull/> : <Form/> 
        
 
    )
}

export default Feedback;

