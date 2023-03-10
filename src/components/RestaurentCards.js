import { CDN_IMG_URL } from "../Constants"


const RestaurentCards = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
    // const {cloudinaryImageId,name,cuisines,avgRating} = props.restaurant.data
    return (
      <div className="w-64 p-1 m-1 shadow-md break-words h-72">
        <img src={CDN_IMG_URL + 
        cloudinaryImageId}    
        alt="ibaco"/>
        <h2>{name}</h2>
        <h3>{cuisines?.join(",")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    )
}
  
export default RestaurentCards;