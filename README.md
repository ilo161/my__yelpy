# README
## My__Yelpy [Live Link](https://my--yelpy.herokuapp.com/#/)

#### My yelpy is a spin off of [yelp.com](https://www.yelp.com) Yelp is a business listing and review site for users to explore businesses nearby and for them to leave their thoughts on their experience at said business.

### Technologies Used

#### This website is built off of the Rails framework for the backend database and Javascript / HTML for front end views and logic.

### Business Show Page

This business show page is the bread and vegan butter of my__yelpy.com because it collects all relevant information and displays it elegantly within html boxes influenced by display: flex. Most boxes of information here utilized display 'flex' a minimum of  3 or 4 times to organize data correctly which gave this page the first challenge (CSS). The Business Header Box shown below is one of the aforementioned. It contains interesting technologies such as <ins> averaging out</ins> a business's total review score / total reviews and thus displaying those maths with a function I named starGenerator() which will magically implement the result of the aforementioned math with appropriate css and star icons on page load (See code below). The challenges with this starGenerator() was creatively thinking of a way to multiply an html element that contains one star and setting up the proper CSS to handle spacing, and size.

![Business Header Box](https://github.com/ilo161/my__yelpy/blob/main/app/assets/images/business_header_box.png "Business Header Box")
![StarGenerator](https://github.com/ilo161/my__yelpy/blob/main/app/assets/images/star_generator.png "Star Generator")


```// Method(s) to extract Average Review for a Business
    const getAverage = () => {
        let ratingSum = 0;

        props.business.reviews.forEach(review => {
            ratingSum += review.rating
        })

        return (Math.floor(ratingSum / props.business.total_business_reviews))
        
    }

    // Logic to set Average Rating for a Business
    let averageBusinessRating;
    if (props.business.reviews.length > 0){
        averageBusinessRating = getAverage();
    }


    const starField = () => (
                    <div className="star-background">
                        <div className="rating-icons"><span>{star}</span></div>
                    </div>
    )

    let starContainerArr = [];

    const starGenerate = () => {
        for (let i = 0; i < averageBusinessRating; i++){
            starContainerArr.push(starField())
        }
    }

    starGenerate();
```

Another feature tucked within the Business Header Box is the all knowing ability of displaying to the viewer in green "OPEN" or red "CLOSED" text if in fact the business is open or closed at the current time of page render. Since all Business's have store hours, I used this information to make the page dynamic. Code snippit and screenshot below. The challenges with this feature were understanding the Date Object from javascript as well as parsing a string from this data to display time correctly. Lastly, extracting the current time (by the hour) is what ultimately displays open or closed. It was fun to build

![Open Closed](https://github.com/ilo161/my__yelpy/blob/main/app/assets/images/open_closed_closed.png "Open Closed")

```
let openTime;
    let closeTime;
    let isOpen = <span>null</span>;
    // Business Hours dissect
    if (props.business.open_time){
        let dateNow = new Date();
        const currHr = dateNow.getHours();
        if( currHr >= props.business.open_time && currHr < props.business.close_time ){
            isOpen = <span className="open-green">Open </span>;
        } else {
            isOpen = <span className="closed-red">Closed </span>;
        }


        openTime = props.business.open_time.toString()+":00 "
        let amPm  = props.business.open_time >= 12 ? "PM" : "AM"
        openTime += amPm 
        openTime = <span>{openTime}</span>

        if (props.business.close_time < 11){
            closeTime = props.business.close_time.toString()+":00 "
        } else {
            closeTime = (props.business.close_time - 12).toString()+":00 "
        }

        amPm  = props.business.close_time >= 12 ? "PM" : "AM"
        closeTime += amPm
        closeTime = <span>{closeTime}</span>

    }
```


