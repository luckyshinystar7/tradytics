import React from "react";

class RandomUserRev extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      userObj: {},
    }

    this.fetchUser = this.fetchUser.bind(this);

  }

  componentDidMount() {
    this.fetchUser();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { dob } = nextState.userObj;
    console.log("shouldComponentUpdate", this.state.userObj, dob);
    // if (dob.age > 50) { return false }
    return true;
  }

  async fetchUser() {
    this.setState({ isLoading: true }, async () => {
      const requestUser = await fetch('https://api.randomuser.me/');
      const userData = await requestUser.json();
      const userObj = userData.results[0];
      this.setState({ userObj, isLoading: false });
    });

  }

  renderInfo() {
    const { userObj } = this.state;
    return (<div>
      <h1>{`${userObj.name.title} ${userObj.name.first} ${userObj.name.last}`}</h1>
      <img src={userObj.picture.large} alt={userObj.name.first} />
      <p>{`Email: ${userObj.email} `}</p>
      <p>{`Age: ${userObj.dob.age} `}</p>
      <p>{`Gender: ${userObj.gender} `}</p>
      <p>{`From: ${userObj.location.city} in ${userObj.location.country} `}</p>
    </div>)
  }

  render() {
    const { isLoading } = this.state;

    return (
      <>
        <div>Exercise to Fixate, rendering random users on React</div>
        {isLoading ? <p>Loading...</p> : this.renderInfo()}
      </>
    )
  }
}

export default RandomUserRev;
