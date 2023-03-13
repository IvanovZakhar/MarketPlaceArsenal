 
import touch from '../../resources/img/ico/touch.svg'
import arrow from '../../resources/img/ico/arrow.svg'
import './question-answer.scss'

const QuestionAnswer = () => {
    return(
        <div className='question-answer'>
            <div className='head__question-answer'>
                <img src={touch} alt='touch'/>
                <h3>Вопрос&ответ</h3>
            </div>
            <ul>
                <li>
                    <span>Когда прицеп отцеплен от машины надо прибретать дополнительно шарик для этотого устройства?</span>	
                    <img src={arrow} alt='arrow'/>
                </li>
                <li>	
                    <span> Здравствуйте. Можно ли установить решётку, с механизмом складывания вправо ?</span>
                    <img src={arrow} alt='arrow'/>
                </li>
                <li>
                    <span>Решетка с шириной 770 подойдет на проем 750?</span>	
                    <img src={arrow} alt='arrow'/>
                </li>

            </ul>
        </div>
    )
}

export default QuestionAnswer;
