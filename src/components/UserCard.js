import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from "../actions";

function UserCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`UserControl ${isOpen ? "Open" : ""}`}>
      <div className="UserCard" onClick={handleClick}>
        <img src={props.avatar} alt="user steam avatar" />
        <p>{props.personaName}</p>
      </div>
      {isOpen && (
        <div className="ControlItem" onClick={props.logout}>
          <p>SwitchAccount</p>
        </div>
      )}
    </div>
  );
}

// export default UserCard;
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
    games: state.games
  };
};

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard);
