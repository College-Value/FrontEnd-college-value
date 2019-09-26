import React from 'react'
import Navigation from "./Navigation";
import NH from "../imgs/nh.jpg";

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>About Page</h1>
            <section>
                <img src={NH} alt="photo of Zac" width="350" />
                <h2>Team Lead</h2>
                <h3>Zac Smith</h3>
            </section>
            <section>
                <img src={NH} alt="photo of Nicole" width="350" />
                <h2>Front End Developer</h2>
                <h3>Nicole Hollis</h3>
            </section>
            <section>
                <img src={NH} alt="photo of Michael" width="350" />
                <h2>Front End Developer</h2>
                <h3>Michael Babylon</h3>
            </section>
            <section>
                <img src={NH} alt="photo of Greg" width="350" />
                <h2>Back End Developer</h2>
                <h3>Greg Johnson</h3>
            </section>
            <section>
                <img src={NH} alt="photo of Scott" width="350" />
                <h2>Data Science</h2>
                <h3>Scott Huston</h3>
            </section>
            <section>
                <img src={NH} alt="photo of Romy" width="350" />
                <h2>Data Science</h2>
                <h3>Romy Morsy</h3>
            </section>

        </div>
    )
}

export default About