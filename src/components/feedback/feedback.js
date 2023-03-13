import padlock from '../../resources/img/ico/padlock.svg';
import './feedback.scss'

const Feedback = () => {
    return(
        <form className='feedback'>
            <h3>Требуется консультация?</h3>
            <div className='input__feedback'>
                <div className='number__feedback'>
                    <label for="number">Телефон</label>
                    <input type='phone' name='phone' placeholder='+7 (999) 999 99 99'/>
                </div>
                <div className='name__feedback'>
                    <label for="name">Имя</label>
                    <input type='text' name='name' placeholder='Иван Иванов'/>
                </div>
                <input type="image" name='agree' src={padlock} alt='agree-input' className='input__agree'/>
                <label className="agree">Я даю согласие на обработку моих персональных данных</label>
                <button className="call-me__btn">Перезвоните мне</button>
            </div>
        </form>
    )
}

export default Feedback;