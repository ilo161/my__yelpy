import { connect } from 'react-redux';
import {requestBusiness, requestBusinesses} from "../../actions/business_actions"
import BusinessShowSkeleton from "./business_show_skeleton";

const mSTP = (state, url) => {

    const id = url.match.params.bizId;
    debugger
    return {
        id,
        business: state.entities.businesses[id]
    }
}

const mDTP = dispatch => {
    return {
        requestBusinesses: () => dispatch(requestBusinesses()),
        requestBusiness: bizId => dispatch(requestBusiness(bizId))
    }
}


export default connect(mSTP, mDTP)(BusinessShowSkeleton);