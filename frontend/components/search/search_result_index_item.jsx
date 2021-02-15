import React from "react";
import { withRouter }from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class SearchResultIndexItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            
        }

       

    }

    render() {
        const {business} = this.props;
         


        const categories = ["Coffee & Tea", "Restaurant"];

        const star = <FontAwesomeIcon icon={faStar} />

        let bizTitle;
        let averageBusinessRating;
        let phoneString;
        let starContainerArr = [];
        let oneReview;
        let categoryStr;

        // Generate Stars <div> </div>
        const starField = () => (
                    <div className="star-background-md mr-2">
                        <div className="rating-icons-md"><span>{star}</span></div>
                    </div>
        )

        // has no return
        const starGenerate = () => {
            for (let i = 0; i < averageBusinessRating; i++){
                starContainerArr.push(starField())
            }
        }

        


        const splitPhoneToString = () => {
            let phoneString = "";
            let phoneArr = Array.from(business.phone.toString());
            phoneArr.splice(0,0, "("); 
            phoneArr.splice(4,0, ")"); 
            phoneArr.splice(5,0, " "); 
            phoneArr.splice(9,0, "-"); 

            return phoneArr.join("")

        }

    
        const getAverage = () => {
            let ratingSum = 0;

            business.reviews.forEach(review => {
                ratingSum += review.rating
            })

            return (Math.floor(ratingSum / business.total_business_reviews))
            
        }

        const generateOneReview = () => {
            let oneReview;
            oneReview = Array.from(business.reviews[0].body).splice(0,500);
            // debugger
            oneReview = `" ${oneReview.join("")} "`
            return oneReview
        }

        const generateCategory = () => {
            let catStr = "$$$$ • "
            catStr += categories[business.category]
            return catStr;

        }

        const generateNumericTitle = () => {
            let title = `${(this.props.idx + 1).toString()}. ${business.business_name}`
            return title
        }

        // Logic to set Average Rating for a Business
         if(business){
           phoneString = splitPhoneToString();
           categoryStr = generateCategory();
           bizTitle = generateNumericTitle();

           if (business.reviews.length > 0){
                averageBusinessRating = getAverage();
                starGenerate();
                oneReview = generateOneReview();
            }
        }

        
        
        


        return (
            business ?
            <div onClick={() => this.props.history.push(`/biz/${business.id}`) } className="result-index-item-container">
                <div className="result-index-item-content">
                    <img className="result-item-img" src={business ? business.photos[3].photoUrl : null}/>

                    {/* Text information - Column */}
                    <div className="business-meta-data-content flex-col-start">
                        <div className="biz-headline-container flex-row-start">
                            <div className="biz-head-left-rail flex-col-start">
                                <p className="review-biz-name text-size-large-plus bold"> {business ? <Link to={`/biz/${business.id}`}>{bizTitle}</Link>: null} </p>
                                <div className="flex-row-start flex-row-align">
                                    {starContainerArr}
                                    <p className="ml-5 text-size-md">{business ? business.total_business_reviews : null}</p>
                                </div>
                                <span className="category-text">{business ? categoryStr : null}</span>
                            </div>
                            <div className="biz-head-right-rail text-size-small flex-col-start">
                                <span>{business ? phoneString : "(###) ###-####"}</span>
                                <span>{business ? business.address : "123 Abc Street"}</span>

                            </div>

                        </div>
                        {/* One Review */}
                        <div className="one-review-content">
                            <span className="open-sans semi-bold text-size-md">{oneReview}</span>
                        </div>


                    </div>

                </div>
            </div>
            :
            <div className="result-index-item-container">
                <div className="result-index-item-content">
                    {/* <img className="result-item-img" src={business ? business.photos[3].photoUrl : null}/> */}

                    {/* Text information - Column */}
                    {/* <div className="business-meta-data-content flex-col-start">
                        <div className="biz-headline-container flex-row-start">
                            <div className="biz-head-left-rail flex-col-start">
                                <p> Your business here </p>
                            </div>
                            <div className="biz-head-right-rail flex-col-start">
                                <span>(###) ###-####</span>
                                <span>123 Abc Street</span>

                            </div> */}

                        {/* </div> */}
                            <span>No Results</span>
                    {/* </div> */}

                </div>
            </div>
           
        )
    }
}

export default withRouter(SearchResultIndexItem);