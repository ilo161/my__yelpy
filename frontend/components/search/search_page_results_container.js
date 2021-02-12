import {connect} from "react-redux";
import SearchPageResults from "./search_page_results";


const mSTP = (state, url) => {

    const searchResults = Object.values(state.entities.search)
    const searchResLen = searchResults.length;

    return {

        searchResults: searchResults.slice(0, searchResLen - 1),
        searchQuery: state.entities.search.searchQuery
    }
}

const mDTP = dispatch => {
    return {
       
    }
}



export default connect(mSTP, null)(SearchPageResults);