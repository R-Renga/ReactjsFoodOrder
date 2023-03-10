import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import React from "react";
import ProfileFunction from "./ProfileFunction";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent didmount");
    // this.timer = setInterval(() => {
    //   console.log("interval didmount");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("child update");
  }
  componentWillUnmount() {
    console.log("unwillmount");
    // clearInterval(this.timer);
  }

  render() {
    console.log("parent render");
    return (
      <>
        <h1>About us page</h1>
        <UserContext.Consumer>
        {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}- {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <ProfileFunction />
      </>
    );
  }
}

export default About;
