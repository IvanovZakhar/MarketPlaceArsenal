


export const useLinks = () => {
     
    const getLink = (props, artic) => {
        console.log(props)
        switch(props){
            case 0:
                window.open(`/catalog/grids/grids-one/${artic}`);
            // case 1:
            //     return res.map(transformVisors); 
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

 