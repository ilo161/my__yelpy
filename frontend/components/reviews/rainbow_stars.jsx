import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';


class RainbowStars extends React.Component {
     constructor(props){
        super(props)

        this.state = {
            starNum: undefined,
            rating: 0,
            ratingText: [
                         "Select your rating",
                         "Not good",
                         "Could've been better",
                         "OK",
                         "Good",
                         "Great"
                        ]
        }

        this.updateStars = this.updateStars.bind(this);
        
    }

     updateStars(e){
        let starIdx;

        // let starsArray;

        if(e.type !== "mouseleave"){
            starIdx = parseInt(e.currentTarget.attributes[1].nodeValue);
            
        }

        if(e.type === "mouseover"){
            this.setState({starNum: starIdx})
        }
        if(e.type === "click"){
            this.setState({starNum: starIdx, rating: (starIdx + 1)}, () => {
                const rating = starIdx + 1

                this.props.update("rating", rating)
            })
        }
        if(e.type === "mouseleave"){
            this.setState({starNum: (this.state.rating - 1)})
        }
    }




    render() {

        const star = <FontAwesomeIcon icon={faStar} size="1x" />
        const allColors = ["", "bg-rate-1", "bg-rate-2", "bg-rate-3", "bg-rate-4", "bg-rate-5"]
        const padLeft = "rate-pl-4"
        const {isReviewForm} = this.props;
        let myStars;
        let ratingText;


        const starFieldGrey = (color, i, padding = "") => (

                    <li onMouseOver={this.updateStars} onClick={this.updateStars} key={i} className={`star-background-lt-grey-md ${color} ${padding}`}
                    data-index={i}>
                        <div className="rating-icons-center"><span>{star}</span></div>
                    </li>
         )


        const generateAllStars = (howMany) => {
            let collectionStars = [];

            switch(howMany){
                case 0:

                    for(let i = 0; i < 5; i++){
                        if(i <= howMany){
                            collectionStars.push(starFieldGrey(allColors[1], i));
                        } else {
                            collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
                        }
                    }
                break;

                case 1:
                    for(let i = 0; i < 5; i++){
                        if(i <= howMany){
                            if(i === 0){
                                collectionStars.push(starFieldGrey(allColors[2], i));
                            } else {
                                collectionStars.push(starFieldGrey(allColors[2], i, padLeft));
                            }
                        } else {
                            collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
                        }
                    }
                break;

                case 2:
                    for(let i = 0; i < 5; i++){
                        if(i <= howMany){
                            if(i === 0){
                                collectionStars.push(starFieldGrey(allColors[3], i));
                            } else {
                                collectionStars.push(starFieldGrey(allColors[3], i, padLeft));
                            }
                        } else {
                            collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
                        }
                    }
                break;

                case 3:
                    for(let i = 0; i < 5; i++){
                        if(i <= howMany){
                            if(i === 0){
                                collectionStars.push(starFieldGrey(allColors[4], i));
                            } else {
                                collectionStars.push(starFieldGrey(allColors[4], i, padLeft));
                            }
                        } else {
                            collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
                        }
                    }
                break;

                case 4:
                    for(let i = 0; i < 5; i++){
                        if(i <= howMany){
                            if(i === 0){
                                collectionStars.push(starFieldGrey(allColors[5], i));
                            } else {
                                collectionStars.push(starFieldGrey(allColors[5], i, padLeft));
                            }
                        } else {
                            collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
                        }
                    }
                break;

                default:
                    for(let i = 0; i < 5; i++){
                        if(i === 0){
                            collectionStars.push(starFieldGrey(allColors[0], i));
                        } else {
                            collectionStars.push(starFieldGrey(allColors[0], i, padLeft))
                        }
                    }
                break;
            }

            return collectionStars;
        }

        const generateRatingText = (howMany) => {
            let text = "";
            let starIdx;
            if(howMany === undefined) starIdx = 0;
            text = this.state.ratingText[starIdx === 0 ? starIdx : (howMany + 1)];

            return (<div className="rating-text-container">
                        <p className="rating-text-content">{text}</p>
                    </div>
                    )
        }

        // let myStars = this.state.starNum ? colorizeStars(this.state.starNum)  : generateAllStars(this.state.starNum);
        myStars = generateAllStars(this.state.starNum);


        ratingText = isReviewForm ? generateRatingText(this.state.starNum) : null;

        return(
            <div className="stars-text-container">
                <div className="stars-text-content flex-row-start">
                    <ul onMouseLeave={this.updateStars} className="stars-array flex-row-start">
                        {myStars}
                    </ul>
                    { isReviewForm ? ratingText : null}
                </div>
            </div>
        )
    }
}

export default RainbowStars;