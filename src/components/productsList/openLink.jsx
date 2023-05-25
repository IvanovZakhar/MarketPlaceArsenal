import urlencode from 'urlencode';

const openLink = ({url, article}) => {
    window.location.href = `/${url}/${urlencode(article)}`;
  };

  export default openLink