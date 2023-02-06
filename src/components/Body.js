import RestaurentCards from "./RestaurentCards";
import {RestaurentList} from "../Constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



function filterdata(searchText,allRestaurent) {
  return allRestaurent.filter((value) => value?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
}


const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [allRestaurent, setallRestaurent] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
   getRestaurents();
  }, []);
  
  async function getRestaurents(){
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7869994&lng=79.13782739999999&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();// readable stream
      setallRestaurent(json?.data?.cards[2]?.data?.data?.cards)
      setFilterData(json?.data?.cards[2]?.data?.data?.cards)
    } catch (err) {
      console.log(err, "error")
      return err;
    }
  }

  console.log("render")

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
            return <RestaurentCards
              {...restaurant?.data}
              key = {restaurant?.data?.id}
            />
          })
       } 
      
      </div>
      </>
    )
}

export default Body;