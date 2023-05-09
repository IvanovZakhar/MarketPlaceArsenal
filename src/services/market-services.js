
import {useHttp} from '../hooks/http.hooks';

const useMarketService = () => {
    const {loading, request,  error, clearError} = useHttp();



    const getProducts = async (catalog) => {
        
        const res = await request(`http://localhost:3001/${catalog}`)
     
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

    
    const transformAllProduct = (grid) => {
        const {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps
        } = grid;
        return {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps,
            categories: [
                {
                    name: 'Каталог'
                } 
            ]
        }
    }

    const transformGridsOne = (grid) => {
        const {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps
        } = grid;
        return {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps,
            categories: [
                {
                name: 'Решетки',
                link: '/grids'
                },
                {
                    name: 'Одностворчатые',
                    link: '/grids-one'
                },
            ]
        }
    }

    const transformGridsTwo = (grid) => {
        const {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps
        } = grid;
        return {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps, 
            categories: [
                {
                name: 'Решетки',
                link:'/grids'
                },
                {
                    name: 'Двухстворчатые',
                    link:'/grids-two'
                }
            ]
        }
    }

    const transformGrids = (grid) => {
        const {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps
        } = grid;
        return {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width, comps,
            categories: [{
                name: 'Решетки',
                link: '/grids'
            }]
        }
    }

    // const transformAntiTheft = (antiTheft) => {
    
    //     return {
    //         antiTheft
    //     }
    // }

    const transformConditionerProtection = (item) => {
        const {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, 
            box_width, color, contry, fabricbox, garanty, height, join_type, 
            lenght, material, name_base, nds, photo_aditional, photo_main, price,
             price_before, purpose, suported_brends, suported_dev, type_, units_in_box, weight_dry, width, comps
        } = item;


        return {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, contry, fabricbox, garanty, height, join_type, lenght, material, 
            name_base, nds, photo_aditional, photo_main, price, price_before, purpose, 
            suported_brends, suported_dev, type_, units_in_box, weight_dry, width, comps,
            categories: [
            {
                name: 'Защита кондицонера',
                link: '/conditioner-protection'
            }]
        }
    }

    const transformVisors = (visor) => {
        const {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, 
            box_width, color, contry, fabricbox, garanty, height, join_type, 
            lenght, material, name_base, nds, photo_aditional, photo_main, price,
             price_before, purpose, suported_brends, suported_dev, type_, units_in_box, weight_dry, width, comps
        } = visor;


        return {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, contry, fabricbox, garanty, height, join_type, lenght, material, 
            name_base, nds, photo_aditional, photo_main, price, price_before, purpose, 
            suported_brends, suported_dev, type_, units_in_box, weight_dry, width, comps,
            categories: [
                {
                name: 'Защита кондицонера',
                link: '/conditioner-protection'
            },
            {
                name: 'Козырьки',
                link: '/visors'
            },
        ]
        }
    }

    const transformBaskets = (baskets) => {
        const {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, 
            box_width, color, contry, fabricbox, garanty, height, join_type, 
            lenght, material, name_base, nds, photo_aditional, photo_main, price,
             price_before, purpose, suported_brends, suported_dev, type_, units_in_box, weight_dry, width, comps,
        } = baskets;


        return {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, contry, fabricbox, garanty, height, join_type, lenght, material, 
            name_base, nds, photo_aditional, photo_main, price, price_before, purpose, 
            suported_brends, suported_dev, type_, units_in_box, weight_dry, width, comps,
            categories: [
            {
                name: 'Защита кондицонера',
                link: '/conditioner-protection'
            },
            {
                name: 'Корзины',
                link: '/baskets'
            }]
        }
    }

    return {
        getProducts
    }
}

export default useMarketService;