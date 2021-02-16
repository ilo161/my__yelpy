import TransparentNav from "./transparent_nav"
import {connect} from "react-redux";


const mSTP = state => {

    return {
        currentUser: state.session.currentUser
    }
}

export default connect(mSTP, null)(TransparentNav);