import GifCard from "./GifCard";
import useImages from "../hooks/useImages";

const GifGrid = ({category }) => { 
  const{images,loading }=useImages({category});
   
  return (
    <div>
        <h3>{category}</h3>
         {loading && <p> cargando...</p>}

        <div   classNme="card-grid" > 
            {images.map((image) => {
              return <GifCard key={image.id} {...image} />;
            })}

  
          </div>
        </div>
  );
};
export default GifGrid;   

//aJnVfJKhdTh4whjsM6fWy5wlsFpQtbTf

