import './specifications.scss'

const SpecificationsGrid = ({productGrid}) => {
    const {
        width_mm, height_mm, product_weight_g, 
        product_color, variant, opening_type, 
        warranty, type, opening_direction, number_of_leafs, number_of_chambers, 
        grille_design, country_of_manufacture
          } = productGrid[0]
 
    return(
        <div className="specifications">
            <h2>Характеристики</h2>
            <ul>
                <li>
                    <span>Высота</span>
                    <span>{height_mm} мм</span>
                </li>
                <li>
                    <span>Ширина</span>
                    <span>{width_mm} мм</span>
                </li>
                <li>
                    <span>Вес</span>
                    <span>{product_weight_g} г</span>
                </li>
                <li>
                    <span>Цвет</span>
                    <span>{product_color}</span>
                </li>
                <li>
                    <span>Вариант</span>
                    <span>{variant}</span>
                </li>
                <li>
                    <span>Тип</span>
                    <span>{type}</span>
                </li>
                <li>
                    <span>Тип открывания</span>
                    <span>{opening_type}</span>
                </li>
                <li>
                    <span>Конструкция</span>
                    <span>{grille_design}</span>
                </li>
                <li>
                    <span>Направление открытия</span>
                    <span>{opening_direction}</span>
                </li>
                <li>
                    <span>Количество створок</span>
                    <span>{number_of_leafs}</span>
                </li>
                <li>
                    <span>Количество камер</span>
                    <span>{number_of_chambers}</span>
                </li>
                <li>
                    <span>Гарантия</span>
                    <span>{warranty}</span>
                </li>
                <li>
                    <span>Страна производитель</span>
                    <span>{country_of_manufacture}</span>
                </li>
            </ul>
        </div>
    )
}

export default SpecificationsGrid;