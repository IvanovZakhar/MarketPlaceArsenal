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
import { YMInitializer as YM } from 'react-yandex-metrika';
import { useEffect, useState } from 'react';
import useMarketService from '../../services/market-services';

const MainPage = () => {
  const [product, setProduct] = useState([])
  const [randomItemsSix, setRandomItemsSix] = useState([])
  const [randomItem, setRandomItem] = useState()
  const {getProducts, loading} = useMarketService()
  useEffect(()=> {
    getProducts('allproducts').then(setProduct)  
  }, [])

  useEffect(() => {
    const getRandomItems = (array, count) => {
        const shuffledArray = array.sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, count);
      };
    
   setRandomItemsSix( getRandomItems(product, 6))
   setRandomItem(getRandomItems(product, 1))
  }, [product])  
    return(
        <>
          <AppHeaderMainPage/>
          <AppHeader/>
          <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-left__main'>
          
                    <CatalogMenu/>
                    <OfferDay randomItem={randomItem} loading={loading}/> 
                    
                  </div>
                  <div className='col-right__main'>
                    <BestOffers randomItemsSix={randomItemsSix} loading={loading}/>
                    <About/>
                
                  </div>
                </div>
    
            </div>
            <div className='container'>
              <Advantage/>
              <QuestionAnswer/>
              <YM accounts={[93888307]} options={{ clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }}>
                <Feedback />
              </YM>

            </div>
          </main>
          <Footer/>
        </>
    )
}

export default MainPage; 