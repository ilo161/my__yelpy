import React from "react"
import {withRouter}from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchResultIndexItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            
        }

       

    }

    render() {
        const {business} = this.props;

        const searchIcon = <FontAwesomeIcon className="icon search-icon" size="1x" icon={faSearch}/>
        return (
            <div className="result-index-item-container">
                <div className="result-index-item-content">
                    <img className="result-item-img" src={business ? business.photos[0].photoUrl : null}/>
                <p>I am content</p>
                {/* <p className="ow">kadgfjksadhfjksdfhjsdkhfjklsadhfjklasdhfjklasdhfjklasdhfjklasdhfjklasdhfkjladshfkjlasdhfkjladshfkjasldhfkjasdhfkjasdhfkjasdhfkjasdhfkjlasdhfkljadshfkjlasdhfkjsadhfkljsadhfkjsadhfkasjdhdkj</p> */}
                </div>
            </div>
        )
    }
}

export default withRouter(SearchResultIndexItem);