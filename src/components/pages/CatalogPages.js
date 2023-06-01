import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import ProductsList from '../productsList/products-list';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import useMarketService from '../../services/market-services';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Feedback from '../feedback/feedback';

const CatalogPages = ({props}) => {
      const {getProducts} = useMarketService();
      const [product, setProduct] = useState();
      const [originalProduct, setOriginalProduct] = useState();
        useEffect(() => {
            getProducts(props).then(data => {
                setProduct(data)
                setOriginalProduct(data)}) 
        }, [props]) 
        if(product){
            return(
                <>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{product ? product[0].categories[0].nameList : 'Каталог'}</title> 
                    </Helmet>
                    <AppHeader/>
         
                    <main>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-left__main'>
                                    <CatalogMenu/>
                                  <Filter product={product} originalProduct={originalProduct} setProduct={setProduct}/>  
                                </div>
                                <div className='col-right__main'>
                                    <ProductsList props={props} originalProduct={originalProduct} product={product}/>  
                                </div>  
                            </div>
                        </div>
                    </main>
                    <Feedback/>
                    <Footer/>
                </>
            )
        }
}

export default CatalogPages;