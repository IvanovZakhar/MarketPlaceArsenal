import './configuration.scss'

const Configuration = ({productPergola}) => {
  
     
    const regex =/-([^-\n]+(?:-[\w\d\s]+)*)[\n\s]*- (\d+)\s+шт/g
 
    const matches = productPergola ? [...productPergola[0].package_contents.matchAll(regex)].map((match) => ({ elem: match[1], quantity: match[2] })) : null;

 

    return(
        <ul className='configuration'>
       
            {matches.map((item, i) => {
                return(
                    <li key={i}>
                        {item.elem} - {item.quantity} шт.
                     </li>
                )
            })}   
        </ul>
    )
}

export default Configuration;