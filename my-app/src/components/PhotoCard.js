import React from 'react'

const PhotoCard = (props) => {
    console.log(props);
    return (
        <div key={props.id} className="main-image">
            <img src={props.image}/>
        </div>
    )
}

export default PhotoCard
