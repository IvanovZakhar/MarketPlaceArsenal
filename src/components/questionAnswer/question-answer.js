 
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
                    <div className='question'>
                        <span>Когда прицеп отцеплен от машины надо прибретать дополнительно шарик для этотого устройства?</span>	
                        <img src={arrow} alt='arrow'/>
                    </div>
                    <span className='answer'> - Нет, дополнительны шарик приобретать не нужно!</span>	
                </li>
                <li>	
                    <div>
                        <span> Здравствуйте. Можно ли установить решётку, с механизмом складывания вправо ?</span>
                        <img src={arrow} alt='arrow'/>
                    </div>
                    <span className='answer'> - Решетку можно установить как вправо так и влево!</span>	
                </li>
                <li>
                    <div>
                        <span>Решетка с шириной 770 подойдет на проем 750?</span>	
                        <img src={arrow} alt='arrow'/>
                    </div>
                    <span className='answer'> - Да, такая решетка подойдет в данный проем по ширине.Выберите ближайшую меньшую величину, чем ваш проем. Высота проема окна может быть больше, чем высота решетки, и ее можно установить как по центру проема, так и сдвинув решетку вверх или вниз проема.</span>
                </li>
                <li>
                    <div>
                        <span>Здравствуйте. Скажите пожалуйста в каком случае нужны наклонные кронштейны для качелей ARSENAL VOLER?</span>	
                        <img src={arrow} alt='arrow'/>
                    </div>
                    <span className='answer'> - Наклонные кронштейны для качелей обеспечивают лучшую устойчивость, но при этом занимают больше пространства, чем прямые, так как они должны быть установлены под определенным углом к поверхности. Это означает, что для установки качелей на наклонных кронштейнах может потребоваться больше места, чем для установки на прямых кронштейнах. Мы предлагаем широкий выбор кронштейнов для качелей в нашем магазине. В нашем каталоге вы найдете различные варианты кронштейнов, которые могут быть подходящим выбором для установки качелей.</span>	
                </li>
                <li>
                    <div>
                        <span>Брусья надо купить отдельно к крепежным кронштейнам?</span>	
                        <img src={arrow} alt='arrow'/>
                    </div>
                    <span className='answer'> - Все верно! Наши крепежные кронштейны доставляются без брусьев!</span>	
                </li> 
            </ul>
        </div>
    )
}

export default QuestionAnswer;
