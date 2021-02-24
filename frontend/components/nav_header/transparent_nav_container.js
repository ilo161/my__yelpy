import TransparentNav from "./transparent_nav"
import {connect} from "react-redux";
import { requestSearchResults } from "../../actions/search_actions"


const mSTP = state => {

    return {
        currentUser: state.session.currentUser
    }
}

const mDTP = dispatch => {
    return{
        action: (searchQuery, filters) => dispatch(requestSearchResults(searchQuery, filters)),
    }
}

export default connect(mSTP, mDTP)(TransparentNav);