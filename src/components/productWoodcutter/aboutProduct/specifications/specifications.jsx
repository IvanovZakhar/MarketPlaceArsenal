import './specifications.scss'

const Specifications = ({productWoodcutter}) => {
    const {
        dimensions_mm, firewood_rack_type, product_color, 
        product_release_type, warranty_period, 
            type, purpose,st_num, 
            material, country_of_manufacture
          } = productWoodcutter[0]
 
    return(
        <div className="specifications">
            <h2>Характеристики</h2>
            <ul>
                <li>
                    <span>Размеры</span>
                    <span>{dimensions_mm} мм</span>
                </li>

                <li>
                    <span>Вид дровницы</span>
                    <span>{firewood_rack_type}</span>
                </li>
                <li>
                    <span>Цвет</span>
                    <span>{product_color}</span>
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
                    <span>Вид выпуска товара</span>
                    <span>{product_release_type}</span>
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