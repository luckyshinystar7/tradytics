// arquivo UserProfile.js
import React from "react";
import Image from "./Image";
import PropTypes from 'prop-types';

class UserProfile extends React.Component {

  render() {
    const { name, email, avatar } = this.props.user;
    // const { user: { name, email, avatar } } = this.props; // mesma coisa que a linha de cima

    return (
      <div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

// UserProfile.propTypes = {
//   user: PropTypes.object.isRequired
// }

// UserProfile.propTypes = {  // Props com destructuring
//   name: PropTypes.string.isRequired,
//   email: PropTypes.number,
//   avatar: PropTypes.string
// }

UserProfile.propTypes = { // Props sem Destructuring
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string
  })
}

export default UserProfile;
