import RestaurentCards from "./RestaurentCards";
import { RestaurentList } from "../Constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/Helper";
import useRestaurentItems from "../utils/useRestaurentItems";
import useOnline from "../utils/useOnline";

const Body = () => {
  const allRestaurent = useRestaurentItems();
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);


  useEffect(() => {
    setFilterData(allRestaurent);
  }, [allRestaurent]);

  const online = useOnline();
  
  if (!online) {
    return  <h1>🤚offline...please check your connection.</h1>
  }


  if (!allRestaurent) return null;

  if (!filterData) return null;

  console.log("render")

  return allRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-text"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterdata(searchText, allRestaurent);
            setFilterData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-cards">
        {filterData.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant.data.id}
              key={restaurant?.data?.id}
            >
              <RestaurentCards {...restaurant?.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
