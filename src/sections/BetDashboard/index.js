import { connect } from "react-redux";
import { compose } from "redux";
import { changeSelection } from "./actions/betsVisibilityAction";
import BetDashboard from "./BetDashboard";

const mapStateToProps = state => {
  console.log(state);
  return {
    initialValues: state.betsReducer.visibility.selected
  };
};

const mapDispatchToProps = {
  changeSelection
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BetDashboard);
