import AppHeaderMainPage from '../appHeaderMainPage/app-header-main-page';
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import BestOffers from '../bestOffers/best-offers';
import About from '../about/about';
import Advantage from '../advantage/advantage';
import QuestionAnswer from '../questionAnswer/question-answer'
import Feedback from '../feedback/feedback';
import OfferDay from '../offerDay/offer-day';
import Footer from '../footer/footer';

const MainPage = () => {
    return(
        <>
          <AppHeaderMainPage/>
          <AppHeader/>
          <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-left__main'>
                    <CatalogMenu/>
                    <OfferDay/>
                  </div>
                  <div className='col-right__main'>
                    <BestOffers/>
                    <About/>
                
                  </div>
                </div>
    
            </div>
            <div className='container'>
              <Advantage/>
              <QuestionAnswer/>
              <Feedback/>
            </div>
          </main>
          <Footer/>
        </>
    )
}

export default MainPage; 