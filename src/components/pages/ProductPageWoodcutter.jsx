import ProductWoodcutter from '../productWoodcutter/product-woodcutter';
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import Filter from '../filter/filter';
import Footer from '../footer/footer';


const ProductPageWoodcutter = () => {
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
                            <ProductWoodcutter/>
                        </div>  
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductPageWoodcutter;