import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback( async (url, method = 'POST', body = 'pass=Ghjcnjqgfhjkm', headers = { 'Content-Type': 'application/x-www-form-urlencoded'}) => {
        setLoading(true);

        try{
            const response = await fetch(url, { method, body, headers}); 
           
            console.log(response)
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
 

    const requestTwo = useCallback( async () => {
        Promise.all([fetch('http://localhost:5000/Sqlconn?t=0', { method : 'POST', body : 'pass=Ghjcnjqgfhjkm', headers : { 'Content-Type': 'application/x-www-form-urlencoded'}}), 
                    fetch('http://localhost:5000/Sqlconn?t=4', { method : 'POST', body : 'pass=Ghjcnjqgfhjkm', headers : { 'Content-Type': 'application/x-www-form-urlencoded'}})])
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(data => {
          const combinedData = [...data[0], ...data[1]];
          console.log(combinedData);
        })
        .catch(error => console.log(error));

    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, requestTwo, request, error, clearError}

}