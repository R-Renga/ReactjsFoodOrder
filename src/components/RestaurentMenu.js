import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurentFetch from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

    const hotel = useRestaurentFetch(resId);
    
  return !hotel ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{hotel.name}</h1>
        <img src={CDN_IMG_URL + hotel.cloudinaryImageId} />
        <h3>{hotel.area}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(hotel.menu.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
