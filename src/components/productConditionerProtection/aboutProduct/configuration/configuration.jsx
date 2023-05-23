import './configuration.scss'

const Configuration = ({productConditionerProtection}) => {
  
    const regex = /([А-Я].*?\s-\s\d+\sшт)\.?/g;
    const matches = productConditionerProtection ? [...productConditionerProtection[0].package_contents.matchAll(regex)].map((match) => ({ elem: match[1] })) : null;
 
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