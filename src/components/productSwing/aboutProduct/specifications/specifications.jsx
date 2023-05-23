import './specifications.scss'

const Specifications = ({productSwing}) => {
    const {
            width_cm, length_cm, product_weight_g, commercial_type, color_name, 
            fastener_coating, warranty_period, number_of_factory_packages,
            delivery_form, perforated_fastener_purpose, beam_holder_design, 
            product_release_type, country_of_manufacture,thickness_mm
          } = productSwing[0]
 
    return(
        <div className="specifications">
            <h2>Характеристики</h2>
            <ul>
                <li>
                    <span>Единиц в одном товаре</span>
                    <span>{number_of_factory_packages} шт.</span>
                </li>
                <li>
                    <span>Длина</span>
                    <span>{length_cm} мм</span>
                </li>
                <li>
                    <span>Ширина</span>
                    <span>{width_cm} мм</span>
                </li>
                <li>
                    <span>Вес</span>
                    <span>{product_weight_g} г</span>
                </li>
                <li>
                    <span>Тип</span>
                    <span>{commercial_type}</span>
                </li>
                <li>
                    <span>Цвет</span>
                    <span>{color_name}</span>
                </li>
                <li>
                    <span>Форма поставки</span>
                    <span >{delivery_form}</span>
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