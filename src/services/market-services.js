
import {useHttp} from '../hooks/http.hooks';

const useMarketService = () => {
    const {loading, request,  error, clearError, successfull} = useHttp();

     
    const getProducts = async (catalog) => {
      
        const res = await request(`https://server-market-arsenal.vercel.app/${catalog}`)
  
            
        switch(catalog){
            case 'allproducts': 
                return res.map(transformAllProduct);
            case 'grids-one':
                return res.map(transformGridsOne);
            case 'grids-two': 
                return res.map(transformGridsTwo);
            case 'grids': 
                return res.map(transformGrids);
            case 'conditioner-protection': 
                return res.map(transformConditionerProtection);
            case 'visors':
                return res.map(transformVisors); 
            case 'baskets':
                return res.map(transformBaskets); 
            case 'anti-theft': 
                return res.map(transformAntiTheft);  
            case 'woodcutters': 
                return res.map(transformWoodcutters); 
            case 'birdhouses': 
                return res.map(transformBirdhouses);
            case 'pergolias': 
                return res.map(transformPergolias);
            case 'swings': 
                return res.map(transformSwings);
            case 'flags': 
                return res.map(transformFlags);      
            default: 
                return res
        }
        
    }

    const getProductsForArticle = async (catalog, article) => {
     
        const res = await request(`https://server-market-arsenal.vercel.app/${catalog}${article}`)
      
             return res
        // switch(num){
        //     case 0: 
        //         return res.map(transformAllProduct);
        //     case 1:
        //         return res.map(transformGridsOne);
        //     case 2:
        //         return res.map(transformVisors); 
        //     case 3:
        //         return res.map(transformBaskets); 
        //     case 4: 
        //         return res 
        //     case 5: 
        //         return res.map(transformGridsTwo);
        //     case 6: 
        //         return res.map(transformGrids);
        //     case 7: 
        //         return res.map(transformConditionerProtection);

        //     default: 
        //         break
        // }
        
    }
    const newOrder = async (order) => {
        
        const res = await request(
                                    `https://server-market-arsenal.vercel.app/new-order`, 
                                    'POST', 
                                    JSON.stringify(order), 
                                    {'Content-Type': 'application/json'}
                                    )
      
        return res
    }

    const newFeedback = async (feedback) => {
        
        const res = await request(
                                    `https://server-market-arsenal.vercel.app/new-feedback`, 
                                    'POST', 
                                    JSON.stringify(feedback), 
                                    {'Content-Type': 'application/json'}
                                    )
      
        return res
    }

    
    const transformAllProduct = (product) => {
        product.categories = [
                {
                    name: 'Каталог',
                    link:'/',
                    nameList: 'Каталог'
                    
                } 
            ]
        return product;
    }

    const transformGridsOne = (grid) => {
        grid.categories = [
            {
                name: 'Каталог',
                link:'/',
                nameList: 'Решетки одностворчатые'
            },
            {
                name: 'Решетки',
                link: '/grids'
            },
            {
                name: 'Одностворчатые',
                link: '/grids/grids-one'
            },
        ]
        return grid;
    }

    const transformGridsTwo = (grid) => {
        grid.categories = [
                {
                    name: 'Каталог',
                    link:'/',
                    nameList: 'Решетки двухстворчатые'
                },
                {
                    name: 'Решетки',
                    link:'/grids'
                },
                {
                    name: 'Двухстворчатые',
                    link:'/grids/grids-two'
                }
            ]
        return grid;
    }

    const transformGrids = (grid) => {
        grid.categories = [
            {
                name: 'Каталог',
                link:'/',
                nameList: 'Решетки'
            },
            {
                name: 'Решетки',
                link: '/grids'
            }
    ]
        return  grid
    }

    const transformConditionerProtection = (item) => {
        item.categories = [
                {
                    name: 'Каталог',
                    link: '/',
                    nameList: 'Защита кондиционера'
                },
                {
                    name: 'Защита кондицонера',
                    link: '/conditioner-protection'
                }]


        return item
    }

    const transformVisors = (visor) => {
        visor.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Защитные козырьки'
            },
            {
                name: 'Защита кондицонера',
                link: '/conditioner-protection'
            },
            {
                name: 'Козырьки',
                link: '/visors'
            },
        ]


        return visor
    }

    const transformBaskets = (baskets) => {
        baskets.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Корзины'
            },
            {
                name: 'Защита кондицонера',
                link: '/conditioner-protection'
            },
            {
                name: 'Корзины',
                link: '/baskets'
            }] 


        return baskets
    }
    
    const transformAntiTheft = (antiTheft) => {
        antiTheft.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Противоугонные устройства'
            },
            {
                name: 'Противоугонные устройства',
                link: '/anti-theft'
            }]
        return antiTheft
        
    }

    const transformWoodcutters = (woodcutters) => {
        woodcutters.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Дровницы'
            },
            {
                name: 'Дровницы',
                link: '/woodcutters'
            }]
        return woodcutters
        
    }

    const transformBirdhouses = (birdhouses) => {
        birdhouses.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Кормушки для птиц'
            },
            {
                name: 'Кормушки для птиц',
                link: '/birdhouses'
            }]
        return birdhouses
        
    }

    const transformPergolias = (pergolias) => {
        pergolias.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Перголы'
            },
            {
                name: 'Перголы',
                link: '/pergolias'
            }]
        return pergolias
        
    }

    const transformSwings = (swings) => {
        swings.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Качели'
            },
            {
                name: 'Перголы',
                link: '/swings'
            }]
        return swings
        
    }

    const transformFlags = (swings) => {
        swings.categories = [
            {
                name: 'Каталог',
                link: '/',
                nameList: 'Флагштоки'
            },
            {
                name: 'Флагштоки',
                link: '/flags'
            }]
        return swings
        
    }


    return {
        getProducts,
        newOrder,
        getProductsForArticle,
        loading, error, clearError, successfull, newFeedback
    }
}

export default useMarketService;