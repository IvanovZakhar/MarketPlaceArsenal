 import { useEffect, useState } from "react";
 import openLink from "../productsList/openLink";

const SearchResult = ({result, searchInput}) => {
    const [style, setStyle] = useState('');
    useEffect(() =>{
        if(searchInput){
            setStyle('active')
        }else{
            setStyle('')
        }
    }, [searchInput])

    const elem = result ? result.map((item, i) => {
        const {main_photo_link, name_of_product} = item
        return (
                <li key={i} onClick={() => openLink(item)}>
                    <img src={main_photo_link} alt={name_of_product}/>
                    <h3>{name_of_product}</h3>
                </li>
            )
    }) : null; 

    return(
       
            <ul className={`search-result ${style}`}>
                {elem}
            </ul>
    
    )
}

export default SearchResult