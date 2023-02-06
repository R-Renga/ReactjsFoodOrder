import { useState } from "react";

export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://cdn.shopify.com/s/files/1/0506/7708/8463/files/400JpgdpiLogo_360x.jpg?v=1614892241"
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
          <li>Home</li>
          <li>AboutUs</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        {loggedIn ? (
          <button onClick={() => {setLoggedIn(false);}}>Logout</button>
        ) : (
            <button onClick={() =>setLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
