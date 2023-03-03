import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import React from "react";
import ProfileFunction from "./ProfileFunction";

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
        <ProfileFunction />
      </>
    );
  }
}

export default About;
