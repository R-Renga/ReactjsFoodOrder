import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";


const RestaurentMenu = () => {
    const { resId } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        fetchingMenuDetails();
    }, []);
    
    async function fetchingMenuDetails(){
        try {
            const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=11.053536&lng=77.061564&menuId=" + resId);
            const json = await data.json();
            setHotel(json.data)
            console.log(json,"json")
        } catch (error) {
            return error;
        }
    }

    return (!hotel) ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <div>
                <h1>{hotel.name}</h1>
                <img src={CDN_IMG_URL + hotel.cloudinaryImageId}/>
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
    )
}


export default RestaurentMenu;