import AppHeaderMainPage from '../appHeaderMainPage/app-header-main-page';
import AppHeader from '../appHeader/app-header';
import CatalogMenu from '../catalogMenu/catalog-menu';
import BestOffers from '../bestOffers/best-offers';
import About from '../about/about';
import './App.scss';



function App() {
  return (
    <div className="App">
    
        <AppHeaderMainPage/>
        <AppHeader/>
        <main>
          <div className='container'>
            <div className='col-left__main'>
              <CatalogMenu/>
            </div>
            <div className='col-right__main'>
              <BestOffers/>
              <About/>
            </div>
          </div>
        </main>

    </div>
  );
}

export default App;
