import React from "react";
import BusinessHeaderBox from "./business_header_box"

class BusinessShowSkeleton extends React.Component {
    constructor(props){
        super(props)

        // this.state = this.props.business;

    }

    componentDidMount() {
        this.props.requestBusinesses().then( () => this.props.requestBusiness(this.props.id));
        
        // this.props.requestBusiness(this.props.id)
    }

    componentDidUpdate(){

    }

    render() {
        const { business } = this.props;
        debugger
        return (
            <div className="business-show-container">
                <div className="top-show-nav">topshownav
                    <ul>
                        <img src=""
                    </ul>
                </div>
                {business ? <BusinessHeaderBox business={business} /> : null }
            </div>
        )
    }


}

export default BusinessShowSkeleton;