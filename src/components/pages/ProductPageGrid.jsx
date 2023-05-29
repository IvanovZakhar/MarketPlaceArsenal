import ProductGrid from "../productGrid/product-grid";
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import Feedback from "../feedback/feedback";


const ProductPage = () => {


 
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
                            <ProductGrid/>
                        </div>  
                    </div>
                </div>
            </main>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default ProductPage;