import RestaurentCards from "./RestaurentCards";
import {RestaurentList} from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



function filterdata(searchText,allRestaurent) {
  return allRestaurent.filter((value) => value?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
}



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurent, setallRestaurent] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
   getRestaurents();
  },[]);
  
  async function getRestaurents(){
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.053536&lng=77.061564&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setallRestaurent(json?.data?.cards[2]?.data?.data?.cards)
      setFilterData(json?.data?.cards[2]?.data?.data?.cards)
    } catch (err) {
      console.log(err, "error")
      return err;
    }
  }


  if (!allRestaurent) return null; 

  if (!filterData) return null;
  
  return (allRestaurent?.length === 0) ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          className="search-text"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button onClick={() => {
          const data = filterdata(searchText, allRestaurent)
          setFilterData(data)
        }
        }>Search</button>
      </div>
      <div className="restaurent-cards">
        {
          filterData.map(restaurant => {
            return (
              <Link
                to={"restaurant/" + restaurant.data.id}
                key={restaurant?.data?.id}>
              <RestaurentCards
            {...restaurant?.data}
          /></Link>
            ) 
          })
       } 
      
      </div>
      </>
  )
}



export default Body;