import { useState,useContext} from "react";
import Logo from "../assets/img/foodie.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



export const Title = () => {
  return (
    <a href="/">
      <img
        data-testid = "logo"
        className="h-28"
        src= {Logo}
        alt="The Foodie"
      />
    </a>
  );
};



const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const { user, setUser } = useContext(UserContext);
  
  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems,"cartitnes")

  return (
    <div className="flex justify-between shadow-md">
      <Title />
      <div>
        <ul className="flex" >
          <Link to="/" className="p-10"><li>Home</li></Link>
          <li className="p-10"><Link to="about">AboutUs</Link></li>
          <Link to="contact" className="p-10"><li>Contact</li></Link>
          <li className="p-10"><Link to="instamart">instamart</Link></li>
          <Link to="cart"><li className="p-10" data-testid="cartItems">Cart - {cartItems.length} items</li></Link>
        </ul>
      </div>
      <div className="p-10">
        <input
          value={user.name}
          onChange={(e) => setUser({
            ...user,
            name: e.target.value
          })}
           
        />
        <input
          value={user.email}
          onChange={(e) => setUser({
            ...user,
            email: e.target.value
          })}
           
        />
        
          <Link to="/" ><button>Logout</button></Link>
      </div>
    </div>
  );
};

export default Header;
