import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import ProductsList from '../productsList/products-list';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import useMarketService from '../../services/market-services';
import { useEffect, useState } from 'react';

const CatalogPages = ({props}) => {
      const {getProducts} = useMarketService();
      const [product, setProduct] = useState();
        useEffect(() => {
            getProducts(props).then(setProduct)
        }, [props])
     console.log(product)
    return(
        <>
            <AppHeader/>
 
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-left__main'>
                            <CatalogMenu/>
                            <Filter/>
                        </div>
                        <div className='col-right__main'>
                            <ProductsList props={props} product={product}/>
                        </div>  
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default CatalogPages;