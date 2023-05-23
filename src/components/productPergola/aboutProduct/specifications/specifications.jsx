import './specifications.scss'

const Specifications = ({productPergola}) => {
    const {
            width_mm, length_mm, height_mm, plate_type, color_of_product, 
            fastener_coating, warranty, number_of_factory_packages,
            type, perforated_fastener_purpose, beam_holder_design, 
            material, country_of_manufacture,thickness_mm
          } = productPergola[0]
 
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
                    <span>{length_mm} мм</span>
                </li>
                <li>
                    <span>Ширина</span>
                    <span>{width_mm} мм</span>
                </li>
                <li>
                    <span>Высота</span>
                    <span>{height_mm} мм</span>
                </li>
                <li>
                    <span>Тип пластины</span>
                    <span>{plate_type}</span>
                </li>
                <li>
                    <span>Цвет</span>
                    <span>{color_of_product}</span>
                </li>
                <li className='type'>
                    <span>Тип</span>
                    <span >{type}</span>
                </li>
                <li>
                    <span>Материал</span>
                    <span>{material}</span>
                </li>
                <li>
                    <span>Толщина металла</span>
                    <span>{thickness_mm} мм</span>
                </li>
                <li>
                    <span>Назначение перфорированного крепежа</span>
                    <span>{perforated_fastener_purpose}</span>
                </li>
                <li>
                    <span>Конструкция держателя балки</span>
                    <span>{beam_holder_design}</span>
                </li>
                <li>
                    <span>Покрытие крепежа</span>
                    <span>{fastener_coating}</span>
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

export default Specifications;