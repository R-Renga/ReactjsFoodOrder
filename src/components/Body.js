import RestaurentCards from "./RestaurentCards";
import { RestaurentList } from "../Constants";
import { useState, useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/Helper";
import useRestaurentItems from "../utils/useRestaurentItems";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body = () => {
  const allRestaurent = useRestaurentItems();
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);


  useEffect(() => {
    setFilterData(allRestaurent);
  }, [allRestaurent]);

  const online = useOnline();
  
  const { user } = useContext(UserContext)
  
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
      <div className="p-3 m-3 text-center">
        <input
          className="p-2 shadow-md outline outline-offset-2 outline-1 ... rounded-md"
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
            className="ml-10 bg-red-400 p-2 rounded-md"
        >
          Search
          </button>
          <h1 className="p-2 m-2">{user.name}</h1>
      </div>
      <div className="flex flex-wrap p-2 m-2 justify-between">
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
