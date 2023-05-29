import ProductBirdhouse from '../productBirdhouse/product-birdhouse';
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import Filter from '../filter/filter';
import Footer from '../footer/footer';
import Feedback from '../feedback/feedback';


const ProductPageBirdHouse = () => {


 
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
                            <ProductBirdhouse/>
                        </div>  
                    </div>
                </div>
            </main>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default ProductPageBirdHouse;