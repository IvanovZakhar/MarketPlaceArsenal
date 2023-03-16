import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import ProductsList from '../productsList/products-list';
import Filter from '../filter/filter';
import Footer from '../footer/footer';

const CatalogPages = () => {
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
                        <ProductsList/>
                    </div>  
                </div>
            </div>
            </main>
            <Footer/>
        </>
    )
}

export default CatalogPages;