import {connect} from "react-redux";
import SearchCityNav from "./search_city_nav";
import { requestSearchResults } from "../../actions/search_actions"


const mSTP = (state, url) => {

   
    return {
      
    }
}

const mDTP = dispatch => {
    return {
        action: (searchQuery, filters) => dispatch(requestSearchResults(searchQuery, filters)),
    }
}


export default connect(null, mDTP)(SearchCityNav);