import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers, faCamera, faGlasses} from '@fortawesome/free-solid-svg-icons';
import {faLightbulb, faLaughBeam} from "@fortawesome/free-regular-svg-icons"
// import { render } from "react-dom";


// const ReviewIndexItem = props =>  {
class ReviewIndexItem extends React.Component {
    constructor(props){
        super(props)
    }
    


    render() {


    const { review } = this.props;
    const ratingGiven = review.rating;
    const demoUserUrl = "https://my-yelpy-seeds.s3-us-west-1.amazonaws.com/user_avatars/empty_avatar_frame.png"

    const star = <FontAwesomeIcon icon={faStar} />
    const friends = <FontAwesomeIcon className="grey" icon={faUsers} />
    const photos = <FontAwesomeIcon className="grey" icon={faCamera} />
    const bulb = <FontAwesomeIcon className="grey" icon={faLightbulb} />
    const laugh = <FontAwesomeIcon className="grey" icon={faLaughBeam} />
    const glasses = <FontAwesomeIcon className="grey" icon={faGlasses} />
    

    const starField = () => (
                    <div className="star-background-md">
                        <div className="rating-icons-md"><span>{star}</span></div>
                    </div>
    )

    const starFieldGrey = (key) => (
                    <div key={key} className="star-background-grey-sm">
                        <div className="rating-icons-grey-sm"><span>{star}</span></div>
                    </div>
    )

    
    let starContainerArr = [];

    const starGenerate = () => {
        for (let i = 0; i < ratingGiven; i++){
            let key = i + 199
            starContainerArr.push(starField(key))
        }
    }

    starGenerate();


        return(
            <>
            <section className="review-item-biz-show flex-row-start">
                {/* Flex row */}
                <div className="review-avatar-container flex-row-start">
                    <img className="avatar-review-item" src={review.userAvatarUrl ? review.userAvatarUrl : demoUserUrl}></img>
                    <div className="flex-col-full">
                        <p className="open-sans">{review.author.first_name}</p>  
                        <p className="open-sans-md">{review.author.zip_code}</p> 
                        <p className="open-sans-sm"><span className="bold">{friends} 3</span> friends</p>
                        <div className="open-sans-sm flex-row-start align-content-center"> {starFieldGrey()} <span className="bold m-r-4">  {review.author.total_reviews} </span> reviews  </div>
                        <p className="open-sans-sm"><span className="bold">{photos} 11</span> photos</p> 

                    </div>
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
                    <section className="reaction-buttons-container flex-row-start">
                        <button className="reaction">{bulb}  Useful</button>
                        <button className="reaction">{laugh} Funny</button>
                        <button className="reaction">{glasses} Cool</button>
                    </section>
                </div>
            </section>
            
                <div className="border-line"></div>
                </>

        )
    }
}



export default ReviewIndexItem;