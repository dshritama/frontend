import React from "react";

const About = (props) => {
    return (
        <div className="row">
            <div className="medium-6 columns medium-push-6">
                <img src = {props.thumbnail} className = "thumbnail" alt="hello"/>
            </div>

            <div className="medium-6 columns medium-pull-6">
                <h2>Hand-Picked & Curated Prints, Just for You</h2>
                <br></br>
                <p>At Desenio, you can be sure to find wall art that matches your style and preferences, 
                to suit your home. Desenio has a wide range of different designs, 
                including photographic prints, classic black & white images, cool retro wall art, modern abstract art, illustrations, 
                and much more. Explore our wall art created by select artists and photographers featuring 
                modern classics.</p>
            </div>
        </div>
    )
}
export default About