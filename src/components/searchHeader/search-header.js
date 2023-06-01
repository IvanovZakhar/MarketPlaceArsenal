import { useState } from 'react';
import SearchResult from './search-result';
import useMarketService from '../../services/market-services';
import './search-header.scss'
 

const SearchHeader = () => {
    const {getProducts} = useMarketService();
    const [products, setProducts] = useState(false);
    const [result, setResult] = useState();
    const [searchInput, setSearchInput] = useState()
    const onGetProducts = (search) => {
        if(!products){
            getProducts('allproducts').then(setProducts)
        }
        const elem =  products.filter(item => {
            return item.name_of_product.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
        setSearchInput(search)
        setResult(elem)
    }
    
    return (
       <>
            <input type='text'  placeholder='Поиск по сайту' className='search-input'  onChange={(e) => onGetProducts(e.target.value)}/>
            <SearchResult result={result} searchInput={searchInput}/>
       </>
    )
}

export default SearchHeader;