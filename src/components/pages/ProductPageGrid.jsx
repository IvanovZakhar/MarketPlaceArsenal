import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMarketService from "../../services/market-services"
import ProductGrid from "../productGrid/product-grid";
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import Filter from '../filter/filter';
import Footer from '../footer/footer';


const ProductPage = ({props}) => {
    const {getProducts} = useMarketService();
    const {artGrid} = useParams();
    
    const [product, setProduct] = useState();
    
    useEffect(() => {
        getProducts(props).then(data => {
             setProduct(data.filter(item => item.artic === artGrid))
        })
    }, [props])

 console.log(product)
 
    return(
        <div className="product-page">
            <AppHeader/>
 
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-left__main'>
                            <CatalogMenu/>
                            <Filter/>
                        </div>
                        <div className='col-right__main'>
                            <ProductGrid product={product}/>
                        </div>  
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductPage;