import React from "react";

class Profile extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/R-Renga");
    const json = await data.json();
    console.log(json, "json");
    this.setState({
      userInfo: json,
    });
    console.log("child didmount");
  }

  render() {
    console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <>
        <h1>{this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count2}</h1>
        <h1>{name}</h1>
        <h1>{location}</h1>
        <img src={avatar_url} />
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 3,
            });
          }}
        >
          Add Count
        </button>
      </>
    );
  }
}

export default Profile;
