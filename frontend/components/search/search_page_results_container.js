import {connect} from "react-redux";
import SearchPageResults from "./search_page_results";
import {requestUpdateBounds} from "../../actions/filter_actions"



const mSTP = (state, url) => {

    const searchResults = Object.values(state.entities.search)
    const searchResLen = searchResults.length;

    // the following key "seachResults" contains the Biz Obj and Search Query as
    // a string in the last index
    return {
        searchResults: searchResults.slice(0, searchResLen - 1),
        searchQuery: state.entities.search.searchQuery
    }
}

const mDTP = dispatch => {

    return {
       requestUpdateBounds: bounds => dispatch(requestUpdateBounds(bounds))
    }
}



export default connect(mSTP, mDTP)(SearchPageResults);