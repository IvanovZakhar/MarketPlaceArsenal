import './configuration.scss'

const Configuration = ({productFlag}) => {
 

    return(
        <ul className='configuration'>
            <li>
                {productFlag[0].package_contents}
            </li>
        </ul>
    )
}

export default Configuration;