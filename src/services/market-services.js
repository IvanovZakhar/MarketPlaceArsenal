
import {useHttp} from '../hooks/http.hooks';

const useMarketService = () => {
    const {loading, request, error, clearError} = useHttp();

    // const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // const _apiKey = 'apikey=baaab7750b9c96f0a5da18949146680e';
    // const _baseOffset = 210;

    const getGrids = async (num) => {
        const res = await request(`http://localhost:5000/Sqlconn?t=${num}`);
        console.log(res)
        switch(num){
            case 0:
                return res.map(transformGrids);
            case 4: 
                return res.map(transformGrids);
            default:
            break
        }
        
    }

    const transformGrids = (grid) => {
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
            weight_dry, width
        }
    }

    return {
        getGrids
    }
}

export default useMarketService;