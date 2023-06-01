import { useEffect, useState } from 'react';

const useFavourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favouritesData = localStorage.favourites;
    if (favouritesData) {
      setFavourites(JSON.parse(favouritesData));
    }
  }, []);

  const handleStorageChange = (event) => {
    if (event.key === 'favourites') {
      setFavourites(JSON.parse(event.newValue));
    }
  };

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleFavourite = (item) => {
    setFavourites((prevFavourites) => {
      const existingIndex = prevFavourites.findIndex(
        (favourite) => favourite.article === item.article
      );

      if (existingIndex !== -1) {
        // Remove item from favourites
        const updatedFavourites = [...prevFavourites];
        updatedFavourites.splice(existingIndex, 1);
        localStorage.favourites = JSON.stringify(updatedFavourites);
        return updatedFavourites;
      } else {
        // Add item to favourites
        const updatedFavourites = [...prevFavourites, item];
        localStorage.favourites = JSON.stringify(updatedFavourites);
        return updatedFavourites;
      }
    });
  };

  return {
    favourites,
    toggleFavourite,
  };
};

export default useFavourites;
