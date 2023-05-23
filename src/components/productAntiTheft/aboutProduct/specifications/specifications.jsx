import './specifications.scss'

const Specifications = ({productAntiTheft}) => {
    const {
        anti_theft_device_type, security_features, operation_modes, 
        feedback, working_humidity, 
            type, purpose,st_num, 
            material, country_of_manufacture
          } = productAntiTheft[0]
 
    return(
        <div className="specifications">
            <h2>Характеристики</h2>
            <ul>
                <li>
                    <span>Тип противоугонного устройства</span>
                    <span>{anti_theft_device_type}</span>
                </li>
                <li>
                    <span>Тип</span>
                    <span>{type}</span>
                </li>
                <li>
                    <span>Охранные функции</span>
                    <span>{security_features}</span>
                </li>

                <li>
                    <span>Режим штатной работы</span>
                    <span>{operation_modes}</span>
                </li>
                <li>
                    <span>Обратная связь</span>
                    <span>{feedback}</span>
                </li>
                <li>
                    <span>Рабочая влажность</span>
                    <span>{working_humidity}</span>
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