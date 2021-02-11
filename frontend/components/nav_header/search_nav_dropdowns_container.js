import SearchNavDropDowns from "./search_nav_dropdowns"
import {connect} from "react-redux";
import { openModal } from "../../actions/modal_actions"


const mDTP = dispatch => {
    return {
        // openModal: (type) => dispatch(openModal(type))
    }
}

export default connect(null, null)(SearchNavDropDowns);