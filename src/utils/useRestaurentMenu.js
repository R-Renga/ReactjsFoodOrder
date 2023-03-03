import { useEffect, useState } from "react";
import { API_MENU } from "../Constants";

const useRestaurentFetch = (resId) => {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);
  console.log("use,render")
  async function fetchRestaurentMenu() {
    try {
      const data = await fetch(API_MENU + resId);
      const json = await data.json();
      setHotel(json.data);
    } catch (error) {
      return error;
    }
  }
  return hotel;
};

export default useRestaurentFetch;
