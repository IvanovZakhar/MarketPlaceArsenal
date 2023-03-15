import arrowCategories from '../../resources/img/ico/arrow__catalog-menu.svg';
import arrowSort from '../../resources/img/ico/arrow-sort.svg';
import grid from '../../resources/img/products/grid520.png';
import d1 from '../../resources/img/products/d1.png';
import likeCard from '../../resources/img/ico/like-card.svg';
import CartCard from '../../resources/img/ico/cart-card.svg';
import plus from '../../resources/img/ico/plus.svg';
import minus from '../../resources/img/ico/minus.svg';
import './products-list.scss'


const ProductsList = () => {
    return(
        <div className='products-list'>
            <ul className='catalog-categories'>
                <li>
                    <a href='/'>Главная</a>
                </li>
                    <img src={arrowCategories} alt='arrow__catalog-menu'/>
                <li>
                    <a href='/'>Защита кондиционера</a>
                </li>
            </ul>
            <h2>Защита кондиционера</h2>
            <div className='sort_catalog-pages-head'>
                <div>
                    По цене
                    <img src={arrowSort} alt='arrow-sort'/>
                </div>
                <div>
                    По популярности
                    <img src={arrowSort} alt='arrow-sort'/>
                </div>
            </div>
            <ul className='products'>
                <li className='product'>
                    <img src={grid} alt='product'/>
                    <div className='about-product'>
                        <h2>Решетка раздвижная 520х770</h2>
                        <div className='text__about-product'>
                                Конструкции наших решеток настолько универсальные (принцип «Лего»), что Вы сами удивитесь открывающимся возможностям. Все составляющие решетки (петля, противосъемные проушины, стойки, ролики и т.п.) собираются в готовое изделие на прочном винтовом соединении (без доступа к нему извне). Количество технологических отверстий в универсальных стойках решетки выполнены с учетом максимально возможной комплектации решеток. В результате можно собрать одну или несколько решеток в разных вариантах и закрепить их на любой проем. В конструкции решеток предусмотрены специальные технологические отверстия, позволяющие дополнить решетку, опорными роликами, крепежными проушинами. Конструкции решеток просты и удобны, как в использовании, так и в монтаже. Как правильно выбрать нужный размер решетки для защиты окна? В таблице указана высота решетки в собранном виде. Выберите ближайшую меньшую величину, чем ваш проем. Высота проема окна может быть больше, чем высота решетки, и ее можно установить как по центру проема, так и сдвинув решетку вверх или вниз проема.

                                Для исключения провисания решетки (так как конструкция шарнирная) при ширине более 1500 мм. рекомендуем использовать опорные ролики на обе створки.

                                При установке опорного ролика на решетку высота решетки увеличивается на 70 мм.

                                Размер по ширине указан при максимальном раскрытии, выберите ближайшую большую величину, чем ваш проем.

                                Габаритный размер по толщине на всех решетках составляет 40 мм.
                                <div></div>
                        </div>
                    </div>
                    <div className='panel-product'>
                        <div className='price-product'>
                            <h3>Цена</h3>
                            <span className='before-price'>3000 ₽</span>
                            <span className='after-price'>2200 ₽</span>
                        </div>
                        <div className='added-panel'>
                            <button>
                                <img src={likeCard} alt='like-product' className='like-product'/>
                            </button>
                            <button>
                                <img src={CartCard} alt='cart-product' className='cart-product'/>
                            </button>
                        </div>
                        <div className='count-product'>
                            <button>
                                    <img src={minus} alt='minus-product' className='minus-product'/>
                            </button>
                            <span className='count'>0</span>
                            <button>
                                    <img src={plus} alt='plus-product' className='plus-product'/>
                            </button>
                        </div>
                    </div>
                </li>
                <li className='product'>
                    <img src={d1} alt='product'/>
                    <div className='about-product'>
                        <h2>Противоугонное устройство для легкового прицепа</h2>
                        <div className='text__about-product'>
                            Универсальное противоугонное устройство (противоугонный замок) для легковых автоприцепов, караванов и лодочных прицепов с полной массой 750 кг.

                            Материал - сталь 4мм.,запорная пластина 6мм. (навесной замок в комплект не входит)

                            Краска по RAL 1003 - порошковое покрытие сигнально-желтого цвета.

                            Устройство служит защитой как от несанкционированного снятия прицепа с фаркопа, так и от сцепки с чужой машиной отдельно стоящего прицепа.

                            Когда прицеп отцеплен от машины дополнительно шарик в замковое устройство вставлять не нужно!
                            <div></div>
                        </div>
                    </div>
                    <div className='panel-product'>
                        <div className='price-product'>
                            <h3>Цена</h3>
                            <span className='before-price'>2550 ₽</span>
                            <span className='after-price'>2360 ₽</span>
                        </div>
                        <div className='added-panel'>
                            <button>
                                <img src={likeCard} alt='like-product' className='like-product'/>
                            </button>
                            <button>
                                <img src={CartCard} alt='cart-product' className='cart-product'/>
                            </button>
                        </div>
                        <div className='count-product'>
                            <button>
                                    <img src={minus} alt='minus-product' className='minus-product'/>
                            </button>
                            <span className='count'>0</span>
                            <button>
                                    <img src={plus} alt='plus-product' className='plus-product'/>
                            </button>
                        </div>
                    </div>
                </li>
                <li className='product'>
                    <img src={grid} alt='product'/>
                    <div className='about-product'>
                        <h2>Решетка раздвижная 520х770</h2>
                        <div className='text__about-product'>
                                Конструкции наших решеток настолько универсальные (принцип «Лего»), что Вы сами удивитесь открывающимся возможностям. Все составляющие решетки (петля, противосъемные проушины, стойки, ролики и т.п.) собираются в готовое изделие на прочном винтовом соединении (без доступа к нему извне). Количество технологических отверстий в универсальных стойках решетки выполнены с учетом максимально возможной комплектации решеток. В результате можно собрать одну или несколько решеток в разных вариантах и закрепить их на любой проем. В конструкции решеток предусмотрены специальные технологические отверстия, позволяющие дополнить решетку, опорными роликами, крепежными проушинами. Конструкции решеток просты и удобны, как в использовании, так и в монтаже. Как правильно выбрать нужный размер решетки для защиты окна? В таблице указана высота решетки в собранном виде. Выберите ближайшую меньшую величину, чем ваш проем. Высота проема окна может быть больше, чем высота решетки, и ее можно установить как по центру проема, так и сдвинув решетку вверх или вниз проема.

                                Для исключения провисания решетки (так как конструкция шарнирная) при ширине более 1500 мм. рекомендуем использовать опорные ролики на обе створки.

                                При установке опорного ролика на решетку высота решетки увеличивается на 70 мм.

                                Размер по ширине указан при максимальном раскрытии, выберите ближайшую большую величину, чем ваш проем.

                                Габаритный размер по толщине на всех решетках составляет 40 мм.
                                <div></div>
                        </div>
                    </div>
                    <div className='panel-product'>
                        <div className='price-product'>
                            <h3>Цена</h3>
                            <span className='before-price'>3000 ₽</span>
                            <span className='after-price'>2200 ₽</span>
                        </div>
                        <div className='added-panel'>
                            <button>
                                <img src={likeCard} alt='like-product' className='like-product'/>
                            </button>
                            <button>
                                <img src={CartCard} alt='cart-product' className='cart-product'/>
                            </button>
                        </div>
                        <div className='count-product'>
                            <button>
                                    <img src={minus} alt='minus-product' className='minus-product'/>
                            </button>
                            <span className='count'>0</span>
                            <button>
                                    <img src={plus} alt='plus-product' className='plus-product'/>
                            </button>
                        </div>
                    </div>
                </li>
                <li className='product'>
                    <img src={d1} alt='product'/>
                    <div className='about-product'>
                        <h2>Противоугонное устройство для легкового прицепа</h2>
                        <div className='text__about-product'>
                            Универсальное противоугонное устройство (противоугонный замок) для легковых автоприцепов, караванов и лодочных прицепов с полной массой 750 кг.

                            Материал - сталь 4мм.,запорная пластина 6мм. (навесной замок в комплект не входит)

                            Краска по RAL 1003 - порошковое покрытие сигнально-желтого цвета.

                            Устройство служит защитой как от несанкционированного снятия прицепа с фаркопа, так и от сцепки с чужой машиной отдельно стоящего прицепа.

                            Когда прицеп отцеплен от машины дополнительно шарик в замковое устройство вставлять не нужно!
                            <div></div>
                        </div>
                    </div>
                    <div className='panel-product'>
                        <div className='price-product'>
                            <h3>Цена</h3>
                            <span className='before-price'>2550 ₽</span>
                            <span className='after-price'>2360 ₽</span>
                        </div>
                        <div className='added-panel'>
                            <button>
                                <img src={likeCard} alt='like-product' className='like-product'/>
                            </button>
                            <button>
                                <img src={CartCard} alt='cart-product' className='cart-product'/>
                            </button>
                        </div>
                        <div className='count-product'>
                            <button>
                                    <img src={minus} alt='minus-product' className='minus-product'/>
                            </button>
                            <span className='count'>0</span>
                            <button>
                                    <img src={plus} alt='plus-product' className='plus-product'/>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ProductsList;