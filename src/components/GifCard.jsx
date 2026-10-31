
const  GifCard = ({title, url}) => {
  return (
    <div>
        <img width ={'300px'}  height={'300px'}

        src={url} alt={title}
        style={{objectFit: "cover"}}

        
        />

       <p> {title}</p>
    </div>
  )
}
export default GifCard
