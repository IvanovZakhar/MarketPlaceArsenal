


export const useLinks = () => {
     
    const getLink = (item, artic) => {
        console.log(item)
        switch(item){
            case 'Решетка на окно/дверь':
                window.open(`/catalog/grids/${artic}`);
            case 'Панель для кондиционера':
                window.open(`/catalog/conditioner-protection/${artic}`);
            // case 2:
            //     return res.map(transformBaskets); 
            // case 3: 
            //     return res.map(transformAntiTheft);
            case 4: 
                window.open(`/catalog/grids/grids-two/${artic}`);
            // case 5: 
            //     return res.map(transformGrids);
            // case 6: 
            //     return res.map(transformConditionerProtection);
            default: 
                break
        }
    }

    return {getLink}
}

 