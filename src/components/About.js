import React from 'react'
import Navigation from "./Navigation";
import NH from "../imgs/nh.jpg";
import ZS from "../imgs/zs.png"
import GJ from "../imgs/gj.png"
import MB from "../imgs/mb.png"
import SH from "../imgs/sh.png"
import RM from "../imgs/rm.png"

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>About Page</h1>
            <div className="About">
                <section className="team-member">
                    <img src={ZS} alt="Zachery Smith" width="350" />
                    <h2>Team Lead - Zachery Smith</h2>
                </section>

                <section className="team-member">
                    <img src={GJ} alt="Greg Johnston" width="350" />
                    <h2>Back End Developer - Greg Johnston</h2>
                </section>

                <section className="team-member">
                    <img src={NH} alt="Nicole Hollis" width="350" />
                    <h2>Front End Developer - Nicole Hollis</h2>
                </section>

                <section className="team-member">
                    <img src={MB} alt="Michael Baynon" width="350" />
                    <h2>Front End Developer - Michael Baynon</h2>
                </section>

                <section className="team-member">
                    <img src={SH} alt="Scott Huston" width="350" />
                    <h2>Data Engineer - Scott Huston</h2>
                </section>

                <section className="team-member">
                    <img src={RM} alt="Romy Morsy" width="350" />
                    <h2>Data Engineer - Romy Morsy</h2>
                </section>
            </div>
        </div>
    )
}

export default About