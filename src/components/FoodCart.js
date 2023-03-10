import { CDN_IMG_URL } from "../Constants";




const FoodCart = ({ name, cloudinaryImageId, price, category }) => {

  return (
        <div className="w-64 p-1 m-1 shadow-md break-words h-72">
        <img src={CDN_IMG_URL + 
        cloudinaryImageId}    
        alt="ibaco"/>
        <h2>{name}</h2>
        <h4>{category}</h4>
        <h4>Rupees{price/100}</h4>
      </div>
    )
}

export default FoodCart;