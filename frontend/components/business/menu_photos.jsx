import React from "react";

const MenuPhotos = ({photo, text}) => {


    return (
        <div className="card-photo-wrapper flex-col-start">
            <img className="card-photo" 
            src={photo ? photo : null}/>

            <p className="text-size-large query-big-headline mt-22">
                {text ? text : null}</p>
        </div>    
    )
}

export default MenuPhotos;