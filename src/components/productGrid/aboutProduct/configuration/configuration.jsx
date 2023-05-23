import './configuration.scss'

const Configuration = ({productGrid}) => {
    const regex = /•(.*?);/g;
    const matches = productGrid ? [...productGrid[0].package_contents.matchAll(regex)].map((match) => ({ elem: match[1] })) : null;
    
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