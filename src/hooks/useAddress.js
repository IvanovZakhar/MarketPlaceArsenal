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
        console.log(address)
        localStorage.address = JSON.stringify(address)
        console.log(address)
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