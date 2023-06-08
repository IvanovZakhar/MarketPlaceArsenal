import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import ProductsList from '../productsList/products-list';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import useMarketService from '../../services/market-services';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Feedback from '../feedback/feedback';   
import { ClipLoader } from 'react-spinners';

const CatalogPages = ({props}) => {
      const {getProducts, loading} = useMarketService();
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
                        <title>{ product[0] ? product[0].categories[0].nameList : 'Каталог'}</title> 
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
                                      {loading ?                              
                                       <ClipLoader color="#FFB701"   cssOverride={{
                                            width: '100px',
                                            height: '100px',
                                            marginLeft: '350px',
                                            marginTop: '100px' 
                                        }} />  :
                                        <ProductsList props={props} originalProduct={originalProduct} product={product}/>} 

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