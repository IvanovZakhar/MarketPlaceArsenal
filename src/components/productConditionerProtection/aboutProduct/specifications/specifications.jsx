import './specifications.scss'

const SpecificationsGrid = ({product}) => {
    const {
            width, height, weight_dry, color, 
            property, open_type, garanty, 
            type_, open_dir, sk_num, st_num, 
            constr, contry
          } = product[0]
 
    return(
        <div className="specifications">
            <h2>Характеристики</h2>
            <ul>
                <li>
                    <span>Высота</span>
                    <span>{height} мм</span>
                </li>
                <li>
                    <span>Ширина</span>
                    <span>{width} мм</span>
                </li>
                <li>
                    <span>Вес</span>
                    <span>{weight_dry} г</span>
                </li>
                <li>
                    <span>Цвет</span>
                    <span>{color}</span>
                </li>
                <li>
                    <span>Ролик</span>
                    <span>{property}</span>
                </li>
                <li>
                    <span>Тип</span>
                    <span>{type_}</span>
                </li>
                <li>
                    <span>Тип открывания</span>
                    <span>{open_type}</span>
                </li>
                <li>
                    <span>Конструкция</span>
                    <span>{constr}</span>
                </li>
                <li>
                    <span>Направление открытия</span>
                    <span>{open_dir}</span>
                </li>
                <li>
                    <span>Количество створок</span>
                    <span>{sk_num}</span>
                </li>
                <li>
                    <span>Количество камер</span>
                    <span>{st_num}</span>
                </li>
                <li>
                    <span>Гарантия</span>
                    <span>{garanty}</span>
                </li>
                <li>
                    <span>Страна производитель</span>
                    <span>{contry}</span>
                </li>
            </ul>
        </div>
    )
}

export default SpecificationsGrid;