import './specifications.scss'

const Specifications = ({productBirdhouse}) => {
    const {
            width_cm, height_cm, length_cm, feeder_placement, color_name, 
            type, material, country_of_manufacture
          } = productBirdhouse[0]
 
    return(
        <div className="specifications">
            <h2>Характеристики</h2>
            <ul>
            <li>
                    <span>Длина</span>
                    <span>{length_cm} мм</span>
                </li>
                <li>
                    <span>Ширина</span>
                    <span>{width_cm} мм</span>
                </li>
                <li>
                    <span>Высота</span>
                    <span>{height_cm} мм</span>
                </li>
                <li>
                    <span>Размещение кормушки</span>
                    <span>{feeder_placement}</span>
                </li>
                <li>
                    <span>Цвет</span>
                    <span>{color_name}</span>
                </li>
                <li>
                    <span>Тип</span>
                    <span>{type}</span>
                </li>
                <li>
                    <span>Материал</span>
                    <span>{material}</span>
                </li>
                <li>
                    <span>Страна производитель</span>
                    <span>{country_of_manufacture}</span>
                </li>
            </ul>
        </div>
    )
}

export default Specifications;