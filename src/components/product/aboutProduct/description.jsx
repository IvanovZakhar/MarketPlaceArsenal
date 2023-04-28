import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import grid from '../../../resources/img/products/grid520.png';
import d1 from '../../../resources/img/products/d1.png';
import likeCard from '../../../resources/img/ico/like-card.svg';
import CartCard from '../../../resources/img/ico/cart-card.svg';
import plus from '../../../resources/img/ico/plus.svg';
import minus from '../../../resources/img/ico/minus.svg';
import './description.scss'


const Description = () => {
    return (
        <div className="description">
            <div className="carousel">
                <Carousel showStatus={false}>
                    <div>
                        <img src={grid} />
                    </div>
                    <div>
                        <img src={d1} />
                    </div>
                    <div>
                        <img src={grid} />
                    </div>
                </Carousel>
                <div className='added-panel'>
                    <button className="added-btn">
                        <img src={likeCard} alt='like-product' className='like-product'/>
                        <span>В избранное</span>
                    </button>
          
                </div>
            </div>
            <div className="definition">
                <div className='panel-product'>
                            <div className='price-product'>
                                <h3>Цена</h3>
                                <span className='before-price'>3700 ₽</span>
                                <span className='after-price'>3123 ₽</span>
                            </div>
    
                            <div className='count-product'>
                
                                <button>
                                        <img src={minus} alt='minus-product' className='minus-product'/>
                                </button>
                                <span className='count'>4</span>
                                <button>
                                        <img src={plus} alt='plus-product' className='plus-product'/>
                                </button>
                            </div>
                    </div>
                    <div className="definition__description">
                    Конструкции наших решеток настолько универсальные (принцип «Лего»), что Вы сами удивитесь открывающимся возможностям. Все составляющие решетки (петля, противосъемные проушины, стойки, ролики и т.п.) собираются в готовое изделие на прочном винтовом соединении (без доступа к нему извне). Количество технологических отверстий в универсальных стойках решетки выполнены с учетом максимально возможной комплектации решеток. В результате можно собрать одну или несколько решеток в разных вариантах и закрепить их на любой проем. В конструкции решеток предусмотрены специальные технологические отверстия, позволяющие дополнить решетку, опорными роликами, крепежными проушинами. Конструкции решеток просты и удобны, как в использовании, так и в монтаже. Как правильно выбрать нужный размер решетки для защиты окна? В таблице указана высота решетки в собранном виде. Выберите ближайшую меньшую величину, чем ваш проем. Высота проема окна может быть больше, чем высота решетки, и ее можно установить как по центру проема, так и сдвинув решетку вверх или вниз проема.

                    Для исключения провисания решетки (так как конструкция шарнирная) при ширине более 1500 мм. рекомендуем использовать опорные ролики на обе створки.

                    При установке опорного ролика на решетку высота решетки увеличивается на 70 мм.

                    Размер по ширине указан при максимальном раскрытии, выберите ближайшую большую величину, чем ваш проем.

                    Габаритный размер по толщине на всех решетках составляет 40 мм.
                </div>

            </div>
        </div>
    )
}

export default Description;