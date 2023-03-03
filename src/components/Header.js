import { useState } from "react";
import Logo from "../assets/img/foodie.png"
import {Link} from "react-router-dom"

export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src= {Logo}
        alt="The Foodie"
      />
    </a>
  );
};

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li><Link to="about">AboutUs</Link></li>
          <Link to="contact"><li>Contact</li></Link>
          <li><Link to="instamart">instamart</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
          <Link to="/"><button>Logout</button></Link>
      </div>
    </div>
  );
};

export default Header;
