import ProductSwing from '../productSwing/product-swing';
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu'; 
import Footer from '../footer/footer';
import Feedback from '../feedback/feedback';


const ProductPageSwing = () => {
    return(
        <div className="product-page">
            <AppHeader/>
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-left__main'>
                            <CatalogMenu/> 
                        </div>
                        <div className='col-right__main'>
                            <ProductSwing/>
                        </div>  
                    </div>
                </div>
            </main>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default ProductPageSwing;