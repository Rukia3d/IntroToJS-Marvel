import { useState, useEffect } from 'react';
import logo from './logo.svg';

const usePlaceholder = (src) => {
  const [url, setUrl] = useState(logo);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setUrl(src);
    console.log("I AM USEEFFECT");
  }, [setUrl, src]);

  return url;
}

export default usePlaceholder;
