import { useEffect, useState } from "react";

const useRestaurentItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(useEffect,"useefect")
    const getRestaurants = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.053536&lng=77.061564&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setData(json?.data?.cards[2]?.data?.data?.cards);
    };
    getRestaurants();
  }, []);

  console.log(data,"dattt")

  return data;
};

export default useRestaurentItems;
