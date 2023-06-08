import { useEffect, useState } from "react";


const useAddress = () => {

  
    const [address, setAddress] = useState([]);
  
    useEffect(() => {
      const addressData = localStorage.address;
      if (addressData) {
        setAddress(JSON.parse(addressData));
      }
    }, []);
  
 
  
    useEffect(() => { 
        localStorage.address = JSON.stringify(address)
       
    }, [address]);

  const handleAddToAddress = (item) => {
        setAddress(item)
  };
  
 
  

  return{
    address,
    handleAddToAddress 
  }
}

export default useAddress;