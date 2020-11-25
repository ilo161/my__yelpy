import React from "react";


const ReviewIndexItem = props =>  {
    const { business } = props;
    debugger
    return(
        <section className="review-item-biz-show">
            {business.reviews[0].body}
        </section>
        

    )
}

export default ReviewIndexItem;