import react, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ fetchUser, userId, user }) => {
  useEffect(() => {
    fetchUser(1);
  }, [fetchUser]);

  console.log("user", user);

  if (!user) {
    return null;
  }

  return <div className={"header"}>User Name</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.id),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
