import { connect } from "react-redux";
import { compose } from "redux";
import BetDashboard from "./BetDashboard";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  };
};

export default compose(connect(mapStateToProps))(BetDashboard);
