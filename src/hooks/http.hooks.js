import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successfull, setSuccessfull] = useState(null);

    const request = useCallback( async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/x-www-form-urlencoded'}) => {
        setLoading(true);

        try{
            const response = await fetch(url, { method, body, headers}); 
           
        
            if(response.ok){
                console.log('ok response')
            }
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            
            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e
        }

    }, [])
 

 

    const clearError = useCallback(() => setError(null), [])

    return {loading, request, error, clearError, successfull}

}