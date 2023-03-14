
import {useHttp} from '../hooks/http.hooks';

const useMarketService = () => {
    const {loading, request, error, clearError} = useHttp();

    // const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // const _apiKey = 'apikey=baaab7750b9c96f0a5da18949146680e';
    // const _baseOffset = 210;

    const getAllProducts = async () => {
        const res = await request(`http://77.239.232.35:5556/api/Sqlconn`);
        console.log(res)
    }

    return {
        getAllProducts
    }
}

export default useMarketService;