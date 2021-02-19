import { connect } from 'react-redux';
import {requestBusiness, requestBusinesses} from "../../actions/business_actions"
import BusinessShowSkeleton from "./business_show_skeleton";

const mSTP = (state, url) => {

    const id = url.match.params.bizId;
    let menuUrl;
    let menuItems;

    if(state.entities.businesses[id]){
        if(state.entities.businesses[id].category === 0){
        menuUrl = "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/coffee_drinks/";
        menuItems = ["drip_coffee.jpg", "latte.jpg", "matcha.jpg", "latte_glass.jpg", "cinnamon_coffee.jpg"];

        menuItems.forEach((drink, idx) => menuItems[idx] = menuUrl + drink)

        }
    }

    return {
        id,
        business: state.entities.businesses[id],
        menuUrl
    }
}

const mDTP = dispatch => {
    return {
        requestBusinesses: () => dispatch(requestBusinesses()),
        requestBusiness: bizId => dispatch(requestBusiness(bizId))
    }
}


export default connect(mSTP, mDTP)(BusinessShowSkeleton);