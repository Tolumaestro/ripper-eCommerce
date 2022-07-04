import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";


import { selectIsCurrentUserFetching, selectCurrentUser} from "../../redux/user/user.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import Payment from "./payment.component"

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isLoading:  selectIsCurrentUserFetching
});

const PaymentContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Payment);

export default PaymentContainer