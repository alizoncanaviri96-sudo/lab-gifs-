import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";
const useImages = ({category}) => {
  const [images, setImagenes] = useState([]);
  const [loading, setLoading] =useState(true);
    
      useEffect(() => {
        const getImagenes= async() =>{
          const data= await getGifs( category);
          console.log(data);
          setImagenes(data);
          setLoading(false);
    
        };
    
        getImagenes();
    
      }, [])
  return {
    images: images,
    loading: loading,

  }
}

export default useImages;
