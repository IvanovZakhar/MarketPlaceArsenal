import './configuration.scss'

const Configuration = ({product}) => {
    console.log(product[0].comps)
    const regex = /•(.*?);/g;
    const matches = product ? [...product[0].comps.matchAll(regex)].map((match) => ({ elem: match[1] })) : null;
    
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