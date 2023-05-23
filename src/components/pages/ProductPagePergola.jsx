import ProductPergola from '../productPergola/product-pergola';
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import Filter from '../filter/filter';
import Footer from '../footer/footer';


const ProductPagePergola = () => {
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
                            <ProductPergola/>
                        </div>  
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductPagePergola;