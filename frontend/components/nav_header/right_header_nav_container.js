import RightHeaderNav from "./right_header_nav"
import {connect} from "react-redux";
import { openModal } from "../../actions/modal_actions"


const mDTP = dispatch => {
    return {
        openModal: (type) => dispatch(openModal(type))
    }
}

export default connect(null, mDTP)(RightHeaderNav);