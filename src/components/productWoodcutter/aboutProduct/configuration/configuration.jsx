import './configuration.scss'

const Configuration = ({productWoodcutter}) => {
  
    const regex = /-(.*?)\./g;;
    const matches = productWoodcutter ? [...productWoodcutter[0].package_contents.matchAll(regex)].map((match) => ({ elem: match[1] })) : null;
 
    return(
        <ul className='configuration'>
       
            {matches.map(item => {
                return(
                    <li>
                        {item.elem}
                    </li>
                )
            })}   
        </ul>
    )
}

export default Configuration;