import React, { useState, useEffect } from 'react';
import axios from "../../node_modules/axios"

const PhotoCard = () => {

    const [homeImg, sethomeImg] = useState([])

    useEffect(() => {
        axios.get("https://api.unsplash.com/collections/4755774/photos?client_id=0a92c5c475ba50f63f6f97cae6fbf57d3b9e16db8bdcfba5b0a93b8b7bc8aeb1&query=college&w=200px&h=200px").then(response => {

            const homeImg = response.data
            console.log("Response from Unsplash", response.data)
            sethomeImg(homeImg);
            console.log("HomeImg for id 1", homeImg[1].urls.regular)
         
        })
    }, [])

    const image = homeImg[1].urls.regular
    // const image = `https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkzMTQ0fQ`

    return (
        <div className="main-image">
            <img src={image} />
        </div>
    )
}

export default PhotoCard
