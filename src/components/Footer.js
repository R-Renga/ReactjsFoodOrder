import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () => {

  const {user} = useContext(UserContext)

  return (
    <>
      <h1>Footer</h1>
      <h2>{user.name}</h2>
    </>
      
    )
}

export default Footer;
  