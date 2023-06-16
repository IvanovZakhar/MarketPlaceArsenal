import urlencode from 'urlencode';

const openLink = ({url, article}) => {
   
    window.location.href = `/${url}/${article}`;
  };

  export default openLink