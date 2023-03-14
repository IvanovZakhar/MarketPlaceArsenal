import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import BestOffers from '../bestOffers/best-offers';
import About from '../about/about';
import Advantage from '../advantage/advantage';
import QuestionAnswer from '../questionAnswer/question-answer'
import Feedback from '../feedback/feedback';
import OfferDay from '../offerDay/offer-day';
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
                    </div>
                    <div className='col-right__main'>
                        
                    </div>
                </div>
            </div>
            </main>
            <Footer/>
        </>
    )
}

export default CatalogPages;