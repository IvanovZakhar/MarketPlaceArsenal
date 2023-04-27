
import {useHttp} from '../hooks/http.hooks';

const useMarketService = () => {
    const {loading, request, requestTwo, error, clearError} = useHttp();

    // const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // const _apiKey = 'apikey=baaab7750b9c96f0a5da18949146680e';
    // const _baseOffset = 210;

    const getProducts = async (num) => {
        const res = await request(`http://localhost:5000/Sqlconn?t=${num}`)
                    
        switch(num){
            case 0:
                return res.map(transformGridsOne);
            case 1:
                return res.map(transformVisors); 
            case 2:
                return res.map(transformBaskets); 
            case 3: 
                return res.map(transformAntiTheft);
            case 4: 
                return res.map(transformGridsTwo);
            default: 
            break
        }
        
    }

    

    const transformGridsOne = (grid) => {
        const {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width
        } = grid;
        return {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width,
            categories: {
                name: 'Решетки одностворчатые',
                link: '/grids-one'
            }
        }
    }

    const transformGridsTwo = (grid) => {
        const {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width
        } = grid;
        return {
            anotation,
            artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, constr, contry, fabricbox, garanty, height, join_type, 
            name_base, nds, open_dir, open_type, photo_aditional, photo_main, 
            price, price_before, property, sk_num, st_num, type_, units_in_box,
            weight_dry, width,
            categories: {
                name: 'Решетки двухстворчатые',
                link: '/grids-two'
            }
        }
    }

    const transformAntiTheft = (antiTheft) => {
        const {
            anotation, artic, bis_type, box_height, box_lenght, box_weight,box_width, color, 
            contry, join_type, name_base, nds, photo_aditional, photo_main, price, price_before,
            suported_brends, type_, units_in_box, weight_dry
        } = antiTheft;


        return {
            anotation, artic, bis_type, box_height, box_lenght, box_weight,box_width, color, 
            contry, join_type, name_base, nds, photo_aditional, photo_main, price, price_before,
            suported_brends, type_, units_in_box, weight_dry,
            categories: {
                name: 'Противоугонные устройства',
                link: '/anti-theft'
            }
        }
    }

    const transformVisors = (visor) => {
        const {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, 
            box_width, color, contry, fabricbox, garanty, height, join_type, 
            lenght, material, name_base, nds, photo_aditional, photo_main, price,
             price_before, purpose, suported_brends, suported_dev, type_, units_in_box, weight_dry, width
        } = visor;


        return {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, contry, fabricbox, garanty, height, join_type, lenght, material, 
            name_base, nds, photo_aditional, photo_main, price, price_before, purpose, 
            suported_brends, suported_dev, type_, units_in_box, weight_dry, width,
            categories: {
                name: 'Козырьки',
                link: '/visors'
            }
        }
    }

    const transformBaskets = (baskets) => {
        const {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, 
            box_width, color, contry, fabricbox, garanty, height, join_type, 
            lenght, material, name_base, nds, photo_aditional, photo_main, price,
             price_before, purpose, suported_brends, suported_dev, type_, units_in_box, weight_dry, width
        } = baskets;


        return {
            anotation, artic, bis_type, box_height, box_lenght, box_weight, box_width, 
            color, contry, fabricbox, garanty, height, join_type, lenght, material, 
            name_base, nds, photo_aditional, photo_main, price, price_before, purpose, 
            suported_brends, suported_dev, type_, units_in_box, weight_dry, width,
            categories: {
                name: 'Корзины',
                link: '/baskets'
            }
        }
    }




    return {
        getProducts
    }
}

export default useMarketService;