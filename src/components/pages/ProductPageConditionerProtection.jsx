import ProductConditionerProtection from '../productConditionerProtection/product-сonditioner-protection';
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu'; 
import Footer from '../footer/footer';
import Feedback from '../feedback/feedback';
import AppHeaderMainPage from '../appHeaderMainPage/app-header-main-page';


const ProductPageConditionerProtection = () => {


 
    return(
        <div className="product-page">
            <AppHeaderMainPage/>
            <AppHeader/>
            <main>
                <div className='container'>
                    <div className='row'>
                        <div className='col-left__main'>
                            <CatalogMenu/> 
                        </div>
                        <div className='col-right__main'>
                            <ProductConditionerProtection/>
                        </div>  
                    </div>
                </div>
            </main>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default ProductPageConditionerProtection;