import {addItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurentFetch from "../utils/useRestaurentMenu";



const RestaurentMenu = () => {
  const { resId } = useParams();

  const hotel = useRestaurentFetch(resId);
  

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
    
  return !hotel ? (
    <Shimmer />
  ) : (
    <div className="flex justify-evenly">
      <div className="m-2">
        <h1 className="font-bold text-2xl" >{hotel.name}</h1>
        <img src={CDN_IMG_URL + hotel.cloudinaryImageId} />
          <h1 className="font-bold text-2xl p-3">Location : {hotel.area}</h1>
      </div>
      <div className="p-2 justify-between">
        <h1 className="font-bold" data-testid = "res">Menu Items</h1>
        <ul>
          {Object.values(hotel.menu.items).map((item) => (
            <li key={item.id}>{item.name} <button className="bg-green-200 p-1 m-1" data-testid = "add-btn" onClick={()=>addFoodItem(item)}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
