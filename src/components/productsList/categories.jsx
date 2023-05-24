import { Link } from 'react-router-dom';
import arrowCategories from '../../resources/img/ico/arrow__catalog-menu.svg';

const Categories = ({ categories }) => {
    if (categories) {
        const link = categories.map(item => (
            <li key={item.name}>
              <img src={arrowCategories} alt='arrow__catalog-menu' />
              <Link to={`/catalog${item.link}`}>{item.name}</Link>
            </li>
          )) 
           
            const name =  categories[0].nameList
          return (
            <>
              <ul className='categories'>
                <li>
                  <Link to='/'>Главная</Link>
                </li>
                {link}
              </ul>
              <div className="categories-name">
                <h2>{ name }</h2>
              </div>
            </>
          );
    }
  };

  export default Categories;