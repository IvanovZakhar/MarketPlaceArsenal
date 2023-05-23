import './specifications.scss'

const Specifications = ({productConditionerProtection}) => {
    const {
        dimensions_mm, product_weight_g, color_name, 
        quantity_in_packaging, warranty_period, 
            type, purpose,st_num, 
            material, country_of_manufacture
          } = productConditionerProtection[0]
 
    return(
        <div className="specifications">
            <h2>Характеристики</h2>
            <ul>
                <li>
                    <span>Размеры</span>
                    <span>{dimensions_mm} мм</span>
                </li>

                <li>
                    <span>Вес</span>
                    <span>{product_weight_g} г</span>
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
                    <span>Количество в упаковке</span>
                    <span>{quantity_in_packaging}</span>
                </li>
                <li>
                    <span>Гарантия</span>
                    <span>{warranty_period}</span>
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