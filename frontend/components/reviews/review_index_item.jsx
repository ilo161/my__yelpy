import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';


const ReviewIndexItem = props =>  {
    const { review } = props;
    const ratingGiven = review.rating;

    const star = <FontAwesomeIcon icon={faStar} />
    debugger

    const starField = () => (
                    <div className="star-background">
                        <div className="rating-icons"><span>{star}</span></div>
                    </div>
    )
    
    let starContainerArr = [];

    const starGenerate = () => {
        for (let i = 0; i < ratingGiven; i++){
            starContainerArr.push(starField())
        }
    }
    starGenerate();


    debugger
    return(
        <section className="review-item-biz-show flex-row-start">
            <div className="review-avatar">
                <img src={review.userAvatarUrl}></img>
            </div>
            <div className="review-text-box-container flex-col-full">
                {/* Is flex Column */}
                <section className="review-stars-date-container flex-row-start">
                    {starContainerArr}
                    <p> {review.created_at}</p>
                </section>
                <section className="small-data flex-row-start">
                    <p> 2 photos </p>
                    <p> 1 checkin</p>
                </section>
                <section className="review-show open-sans">
                    {review.body}   
                </section>

            </div>
        </section>
        

    )
}

export default ReviewIndexItem;